// From tutorial found at https://www.emanueleferonato.com/2014/01/17/creation-of-an-html5-tile-based-platform-game-with-no-engines-behind-pure-code/

// I cannot get the Clay County map to display along with the vector squares I am drawing. I'm
// not sure how to draw squares on top of an image in a canvas.

// I'm watching a Mario Game tutorial to see if it gives me some insight
// https://www.youtube.com/watch?v=4q2vvZn5aoo&ab_channel=ChrisCourses


(function(){
	
	var canvas = document.getElementById("canvas");   // the canvas where game will be drawn
	var context = canvas.getContext("2d");            // canvas context
	var levelCols=6;							// level width, in tiles
	var levelRows=6;							// level height, in tiles
	var tileSize=64;							// tile size, in pixels
    const img = new Image();        
    img.src = './CCMap-950x1280.png';       // Clay County Map image

	
	var level = [        						// the 11x9 level - 1=wall, 0=empty space
		[1,0,1,0,1,0],
		[0,1,0,1,0,1],
        [1,0,1,0,1,0],
		[0,1,0,1,0,1],
        [1,0,1,0,1,0],
		[0,1,0,1,0,1]
	];
	
	//canvas.width=tileSize*levelCols;                   // canvas width. Won't work without it even if you style it from CSS
	//canvas.height=tileSize*levelRows;                   // canvas height. Same as before

    canvas.width = 2500;
    canvas.height = 2500;

	renderMap();
	
	// function to display the map
	
	function renderMap(){
		// clear the canvas
		//context.clearRect(0, 0, canvas.width, canvas.height);

        

		// walls = red boxes
		context.fillStyle = "#ff0000";
		for(i=0;i<levelRows;i++){
			for(j=0;j<levelCols;j++){
				if(level[i][j]==1){
					context.fillRect(j*tileSize,i*tileSize,tileSize,tileSize);	
				}
			}
		}
        context.fillStyle = "#ffffff"
        context.font = "30px Arial";
        context.fillText("Hello World", canvas.width/2, canvas.height/2);

        img.onload = () => { context.drawImage(img, 0, 0); };
        
	}



    
     
    



})();