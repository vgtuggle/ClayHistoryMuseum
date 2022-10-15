const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Platform {
    constructor () {
        this.position = {
            x: 200,
            y: 100
        }
        this.height = 20;
        this.width = 200;
        
    }

    draw() {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
        console.log("x: " + this.position.x + "y: " + this.position.y + "width: " + this.width +"height: " + this.height);
    }

}

const p1 = new Platform();
p1.draw();

