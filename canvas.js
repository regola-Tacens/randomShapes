
const app = {
    init(){
       app.shapeChangeListener(),
       app.makeShape(app.utils.randomNumber()+3, 'ctx','ctx2')
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
    makeShape(sides,context){
        const gradient = app.randomGradient();
        const sizeRandom = 20 + Math.round(Math.random()*100);
        const speedRandom = 1 + Math.round(Math.random()*50);
        const randomDirection = Math.random() > 0.5 ? -1 : 1;
        
        app.domElm.ctxInterval = setInterval(()=>{
            app.domElm[context].filter = "hue-rotate(22)";
            app.domElm[context].rotate( randomDirection * Math.PI/90);
            app.domElm[context].clearRect(-150,-150,300, 300);

            //définition du nouveau gradient de couleur
            let shapeGradient = app.domElm[context].createLinearGradient(10,50,50,20);
            shapeGradient.addColorStop(0,gradient[0]);
            shapeGradient.addColorStop(1,gradient[1]);
            app.domElm[context].fillStyle =shapeGradient;

            app.domElm[context].beginPath();
            const angle = (Math.PI*2)/sides;
            let computedAngle = angle;
            app.domElm[context].moveTo((Math.cos(computedAngle)*sizeRandom), (Math.sin(computedAngle)*sizeRandom));
            for( i=1; i<= sides;i++){
                app.domElm[context].lineTo((Math.cos(computedAngle)*sizeRandom), (Math.sin(computedAngle)*sizeRandom))
                computedAngle += angle
            }
            app.domElm[context].fill();
        },30)
    },
    shapeChangeListener(){
        app.domElm.btnShapeChanger.addEventListener('click',()=>{
            clearInterval( app.domElm.ctxInterval) ;
            const sides = app.utils.randomNumber()+3;      
            app.makeShape(sides,'ctx');
            app.makeShape(sides,'ctx2');
        })
    },
    initCTX(){
        app.domElm.ctx = app.domElm.canvas.getContext('2d');
        app.domElm.ctx.translate(75,75);

        app.domElm.ctx2 = app.domElm.canvas.getContext('2d');
        app.domElm.ctx2.translate(75,75);
    }
}

document.addEventListener('DOMContentLoaded', app.init );
