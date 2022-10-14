// drawing county map image on canvas
// reference: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage


function setUpCanvas() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    
    const img = new Image();
    img.src = "ccmap.png"       //Clay County Township Map

    const townshipCoords = [
    //  these array data values are for: range, twsp, x, y, width, height 
    //  
    //  note: the x, y, width & height 
    //  are pixel values on the Clay County Township Map "ccmap.png"

    //  Only the first two Range values are provided, we'll
    //  need to get the values of Ranges 3 & 4. 

        [1, 6, 57, 123, 222, 222],
        [1,	7, 57, 343, 222, 222],
        [1, 8, 55, 564, 222, 222],
        [1, 9, 53, 785, 222, 222],
        [1, 10, 51, 1005, 222, 222],
        [2,	6, 276, 123, 222, 222],    
        [2,	7, 274, 341, 222, 222],
        [2,	8, 273, 564, 222, 222],
        [2,	9, 272, 785, 222, 222],
        [2,	10, 271, 1006, 222, 222],
 [3, 6, 497, 123, 222, 222],
 [3, 7, 495, 345, 222, 222],
 [3, 8, 494, 567, 222, 222],
 [3, 9, 493, 778, 222, 222],
 [3, 10, 491, 1000, 222, 222],
 [4, 6, 719, 123, 222, 222],
 [4, 7, 717, 345, 222, 222],
 [4, 8, 716, 568, 222, 222],
 [4, 9, 715, 790, 222, 222],
 [4, 10, 714, 1012, 222, 222]
    ]

    let townshipArray = [];         // array to store Township objects

    // loop to create Township objects and store inside the townshipArray
    for (let i=0; i<townshipCoords.length; i++){

        let twsp = new Township(townshipCoords[i][0],townshipCoords[i][1],townshipCoords[i][2],townshipCoords[i][3],townshipCoords[i][4],townshipCoords[i][5]);
        townshipArray.push(twsp);
        //console.log(twsp);
    }

    let tIndex = 2;  // index number of the township to display cropped on the map ... changing this changes the image

    // input image cropping dimensions
    let img_sx = townshipArray[tIndex].x;
    let img_sy = townshipArray[tIndex].y;
    let img_sWidth = townshipArray[tIndex].width;
    let img_sHeight = townshipArray[tIndex].height;                       

    //output image dimensions
    let img_dx = 50;
    let img_dy = 50;
    let img_dWidth = 400;
    let img_dHeight = 400;

    img.onload = function(){          
        context.drawImage(img, img_sx, img_sy, img_sWidth, img_sHeight, img_dx, img_dy, img_dWidth, img_dHeight);  
    };

    /*
    console.log(townshipArray[tIndex].x);
    console.log(townshipArray[tIndex].y);
    console.log(townshipArray[tIndex].width);
    console.log(townshipArray[tIndex].height);

    console.log(townshipArray[tIndex]);
    */
    
}

// A Township object defines the x,y coordinates of the upper left corner
// and the width and height of the township on the ccmap.png county map
// It also includes the Range & Township of the surveyed township

class Township {
    constructor(range, township, sx, sy, sWidth, sHeight) {  
        this.r = range;
        this.t = township;
        this.x = sx;
        this.y = sy;
        this.width = sWidth;
        this.height = sHeight;
    }
}


function loadTownships(){

}



setUpCanvas();

// create Township objects
loadTownships();



