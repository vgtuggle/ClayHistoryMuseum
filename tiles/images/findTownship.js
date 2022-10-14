// drawing county map image on canvas
// reference: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage


function setUpCanvas() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    
    const img = new Image();
    img.src = "ccmap.png"       //Clay County Township Map

    // input image cropping dimensions
    let img_sx = 55;
    let img_sy = 564;
    let img_sWidth = 222;
    let img_sHeight = 222;

    // output image dimensions
    let img_dx = 50;
    let img_dy = 50;
    let img_dWidth = 400;
    let img_dHeight = 400;

    img.onload = function(){          
        context.drawImage(img, img_sx, img_sy, img_sWidth, img_sHeight, img_dx, img_dy, img_dWidth, img_dHeight);  
    };

}

// A Township object defines the x,y coordinates of the upper left corner
// and the width and height of the township on the ccmap.png county map
// It also includes the Range & Township of the surveyed township

class Township {
    constructor(sx, sy, sWidth, sHeight, range, township) {  
        this.r = range;
        this.t = township;
        this.x = sx;
        this.y = sy;
        this.width = sWidth;
        this.height - sHeight;
    }
}

setUpCanvas();


/* Township data to use for testing

r	t	x	y	width	height
1	6	57	123	222	222
1	7	57	343	222	222
1	8	55	564	222	222
1	9	53	785	222	222
1	10	51	1005    222	222
2	6	276	123	222	222
2	7	274	341	222	222
2	8	273	564	222	222
2	9	272	785	222	222
2	10	271	1006	222	222



*/