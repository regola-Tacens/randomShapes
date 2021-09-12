
const app = {
    init(){
       app.shapeChangeListener(),
       app.makeShape(app.utils.randomNumber()+3)
       app.initCTX();
    },
    colors : ['red', 'orange', 'lawngreen', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple', 'deepskyblue','aqua', 'brown','darkslateblue','darkkhaki','hotpink','lightsalmon','magenta','lightslategrey'],
    domElm:{
        canvas:document.querySelector('#canvas_un'),
        canvas:document.querySelector('#canvas_deux'),
        btnShapeChanger: document.querySelector('.square_btn'),
        ctxInterval:''
    },
    utils:{
        randomNumber(){
            return Math.round(Math.random()*10)
        }
    },
    randomGradient(){
        const gradientColor1 = app.colors[Math.floor(Math.random()*app.colors.length)]
        const gradientColor2 = app.colors[Math.floor(Math.random()*app.colors.length)]
        return [gradientColor1, gradientColor2];
    },
    makeShape(sides){
        const gradient = app.randomGradient();
        const sizeRandom = 20 + Math.round(Math.random()*100);
        const speedRandom = 1 + Math.round(Math.random()*50);
        const randomDirection = Math.random() > 0.5 ? -1 : 1;
        
        app.domElm.ctxInterval = setInterval(()=>{
            app.domElm.ctx.filter = "hue-rotate(22)";
            app.domElm.ctx.rotate( randomDirection * Math.PI/90);
            app.domElm.ctx.clearRect(-150,-150,300, 300);

            //définition du nouveau gradient de couleur
            let shapeGradient = app.domElm.ctx.createLinearGradient(10,50,50,20);
            shapeGradient.addColorStop(0,gradient[0]);
            shapeGradient.addColorStop(1,gradient[1]);
            app.domElm.ctx.fillStyle =shapeGradient;

            app.domElm.ctx.beginPath();
            const angle = (Math.PI*2)/sides;
            let computedAngle = angle;
            app.domElm.ctx.moveTo((Math.cos(computedAngle)*sizeRandom), (Math.sin(computedAngle)*sizeRandom));
            for( i=1; i<= sides;i++){
                app.domElm.ctx.lineTo((Math.cos(computedAngle)*sizeRandom), (Math.sin(computedAngle)*sizeRandom))
                computedAngle += angle
            }
            app.domElm.ctx.fill();
        },3)
    },
    shapeChangeListener(){
        app.domElm.btnShapeChanger.addEventListener('click',()=>{
            clearInterval( app.domElm.ctxInterval) ;
            const sides = app.utils.randomNumber()+3;      
            app.makeShape(3);
        })
    },
    initCTX(){
        app.domElm.ctx = app.domElm.canvas.getContext('2d');
        app.domElm.ctx.translate(150,150);

        // app.domElm.ctx2 = app.domElm.canvas.getContext('2d');
        // app.domElm.ctx2.translate(150,150);
    }
}

document.addEventListener('DOMContentLoaded', app.init );
