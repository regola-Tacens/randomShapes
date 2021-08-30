
const app = {
    init(){
    //    app.makeShape(),
       app.shapeChangeListener()
    },
    domElm:{
        canvas:document.querySelector('canvas'),
        btnShapeChanger: document.querySelector('.shape-changer')
    },
    utils:{
        randomNumber(){
            return Math.round(Math.random()*10)
        }
    },
    makeShape(sides){
        const ctx = app.domElm.canvas.getContext('2d');
        ctx.clearRect(0,0,app.domElm.canvas.width, app.domElm.canvas.height);
        ctx.fillStyle = 'green';
        ctx.strokeStyle = "rgba(255, 0, 0, .5)";
        ctx.beginPath();
        const angle = (Math.PI*2)/sides;
        let computedAngle = angle;
        ctx.moveTo((Math.cos(computedAngle)*50)+150, (Math.sin(computedAngle)*50)+150);
        for( i=1; i<= sides;i++){
            ctx.lineTo((Math.cos(computedAngle)*50)+150, (Math.sin(computedAngle)*50)+150)
            computedAngle += angle
        }
        ctx.fill();
    },
    shapeChangeListener(){
        app.domElm.btnShapeChanger.addEventListener('click',()=>{
            const sides = app.utils.randomNumber()+3;      
            app.makeShape(sides);
        })
    }

}

document.addEventListener('DOMContentLoaded', app.init );
