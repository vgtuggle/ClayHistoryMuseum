/*
Mario Game Tutorial
by Chris Courses
https://www.youtube.com/watch?v=4q2vvZn5aoo&ab_channel=ChrisCourses

(This is a really cool tutorial!)
(stopped at 37:19 on 10/13/2022 5:22 pm)
*/


const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;            // acceleration due to gravity
const elasticity = 0;         // bounciness
const friction = 0;           // drag
const dx = 5;                  // change in x axis
const dy = 20;                  // change in y axis

console.log(c);

class Player {
    constructor() {
        this.position = {
            x: 30,
            y: 30
        }
        
        this.width = 100;
        this.height = 100;
        this.color = '#ff0000';
        this.velocity = {
            x: 0,
            y: 0
        }

    }

    draw() {
        c.fillStyle = player.color;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x - friction;
        //this.position.x *= friction;

        if(this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }

        /*if (this.position.x >= canvas.width - this.width || this.position.x <= 0) {
            this.velocity.x *= -1;
        }*/

    }
}

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
        //c.fillStyle = 'blue';
        c.fillRect(20,20,200,20);
        console.log("x: " + this.position.x + "y: " + this.position.y + "width: " + this.width +"height: " + this.height);
    }

}

const player = new Player();  // construct new player object
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

const platform = new Platform();
platform.draw();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update();

    if(keys.right.pressed) {
        player.velocity.x = 5;
    } else if (keys.left.pressed) {
        player.velocity.x = -5;
    }
    else {
        player.velocity.x = 0;
    }
}

animate();

window.addEventListener('keydown', ({keyCode}) => {
    console.log(keyCode) 
    switch(keyCode) {
        case 65:
            //console.log('left');
            //player.velocity.x -= dx;
            keys.left.pressed = true;
            break;
        case 83:
            //console.log('down');
            //player.velocity.y += dy;
            
            break;
        case 68:
            //console.log('right');
            //player.velocity.x += dx;
            
            keys.right.pressed = true;
            break;
        case 87:
            //console.log('up');
            player.velocity.y -= dy;
    } 
});

window.addEventListener('keyup', ({keyCode}) => {
    console.log(keyCode) 
    switch(keyCode) {
        case 65:
            //console.log('left');
            keys.left.pressed = false;
            break;
        case 83:
            //console.log('down');
            //player.velocity.y = 0;
            break;
        case 68:
            //console.log('right');
            //player.velocity.x = 0;
            keys.right.pressed = false;
            break;
        case 87:
            //console.log('up');
            //player.velocity.y = 0;
    } 
});