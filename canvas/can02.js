
function myRectDF(x,y,length,width,fillColor)
  { 
	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = "red";
	context.fillStyle=fillColor;
	context.moveTo(x,y);
	context.lineTo(x, y + length);
	context.lineTo(x + width, y + length);
	context.lineTo(x + width, y);
	context.moveTo(x,y);
	context.fill();
  }

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
myRectDF(200,100,75, 125,"yellow");
