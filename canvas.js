
const app = {
    init(){
       app.shapeChangeListener(),
       app.makeShape(3, 'ctx')
       app.makeShape(3, 'ctx2')
       app.makeShape(3, 'ctx3')
       app.initCTX();
    },
    colors : ['red', 'orange', 'lawngreen', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple', 'deepskyblue','aqua', 'brown','darkslateblue','darkkhaki','hotpink','lightsalmon','magenta','lightslategrey'],
    domElm:{
        canvas:document.querySelector('#canvas_un'),
        canvas2:document.querySelector('#canvas_deux'),
        canvas3:document.querySelector('#canvas_trois'),
        btnShapeChanger: document.querySelector('.square_btn'),
        intervalctx:'',
        intervalctx2:'',
        intervalctx3:'',
        textDegrade:document.querySelector('#degrade'),
        

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

        //affichage de l'info des degrade
        app.domElm.textDegrade.textContent += `  ${gradient[0]} - ${gradient[1]}    \r`
        // app.domElm.textDegrade.textContent = "ok"

        app.domElm[`interval${context}`] = setInterval(()=>{
            
            // app.domElm[context].filter = "hue-rotate(22)";
            app.domElm[context].rotate( randomDirection * Math.PI/90);
            app.domElm[context].clearRect(-150,-150,300, 300);
            app.domElm[context].globalAlpha=0.5;

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

            
            
            
        },speedRandom)
    },
    shapeChangeListener(){
        app.domElm.btnShapeChanger.addEventListener('click',()=>{
            app.domElm.textDegrade.textContent='';
            clearInterval( app.domElm.intervalctx) ;
            clearInterval( app.domElm.intervalctx2) ;
            clearInterval( app.domElm.intervalctx3) ;
            const sides = app.utils.randomNumber()+3;      
            app.makeShape(3,'ctx');
            app.makeShape(3,'ctx2');
            app.makeShape(3,'ctx3');
            
        })
    },
    initCTX(){
        app.domElm.ctx = app.domElm.canvas.getContext('2d');
        app.domElm.ctx.translate(150,150);

        app.domElm.ctx2 = app.domElm.canvas2.getContext('2d');
        app.domElm.ctx2.translate(150,150);

        app.domElm.ctx3 = app.domElm.canvas3.getContext('2d');
        app.domElm.ctx3.translate(150,150);
    }
}

document.addEventListener('DOMContentLoaded', app.init );
