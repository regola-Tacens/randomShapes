
const app = {
    init(){
       center = false,
       app.shapeChangeListener(),
       app.makeShape(app.utils.randomNumber()+3)
    },
    domElm:{
        canvas:document.querySelector('canvas'),
        btnShapeChanger: document.querySelector('.shape-changer'),
    },
    utils:{
        randomNumber(){
            return Math.round(Math.random()*10)
        }
    },
    makeShape(sides){;
        const ctx = app.domElm.canvas.getContext('2d');
        !center && ctx.translate(150,150);
        center = true

        ctx.clearRect(-150,-150,300, 300);
        ctx.fillStyle = 'green';
        ctx.strokeStyle = "rgba(255, 0, 0, .5)";
        ctx.beginPath();
        const angle = (Math.PI*2)/sides;
        let computedAngle = angle;
        ctx.moveTo((Math.cos(computedAngle)*50), (Math.sin(computedAngle)*50));
        for( i=1; i<= sides;i++){
            ctx.lineTo((Math.cos(computedAngle)*50), (Math.sin(computedAngle)*50))
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
