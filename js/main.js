const canvas=document.getElementById("canvas");
let ctx = canvas.getContext('2d');

// obtiene las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

// el canvas tien las mismas dimensiones que la pantalla
canvas.height = window_height;
canvas.width = window_width;

canvas.style.background='#ff8';

class Circle{
    constructor(x, y, radius, color, text){
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
    }
    draw(Context) {
        Context.beginPath();
        Context.lineWidth=5;
        Context.strokeStyle = this.color;
        Context.arc(this.posX, this.posY, this.radius,  0, Math.PI*2, false);
        Context.stroke();
        Context.closePath();
        Context.textAlign="center";
        Context.textBaseline="middle";
        Context.font="20px Arial";
        Context.fillText(this.text, this.posX, this.posY);
    }
}

let arrayCircle=[];

for (let i=0;i<10;i++){
    let randomS = Math.random()* window_width;
    let randomR = Math.random()* window_height;
    let randomRadius = Math.floor(Math.random()* 100 + 15);
    let miCirculo = new Circle (randomS, randomR, randomRadius, 'red', i + 1);
    arrayCircle.push(miCirculo);
    arrayCircle[i].draw(ctx);
}

//let miCirculo = new Circle (100, 100, 50, 'red', 'tec');
//miCirculo.draw(ctx);

//let miCirculo2 = new Circle (250, 100, 50, 'blue', 'pachuca');
//miCirculo2.draw(ctx);

//let miCirculo3 = new Circle (400, 100, 50, 'green', 'mexico');
//miCirculo3.draw(ctx);