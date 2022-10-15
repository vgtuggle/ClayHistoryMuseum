// from Mozilla mdn https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage

const canvas = document.getElementById("canvas");   // the canvas where game will be drawn
const context = canvas.getContext("2d");            // canvas context
const img = new Image(60,80);   

image.onload = drawImageActualSize;   // calls function on img load
img.src = './CCMap-950x1280.png';       // Clay County Map image

function drawImageActualSize () {
	
	

    canvas.width = 200;
    canvas.height = 200;

    context.drawImage(this, 0, 0);
    
    context.drawImage(this, 0, 0, this.width, this.height);
 
}



    
     
    



