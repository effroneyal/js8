var context;
var canvas;
// Get canvas context
function init(){
     canvas = document.getElementById("pongCanvas");
     context = canvas.getContext("2d");
}
// Draw Rectangle
function drawRect(x, y, width, height, brush, pen, pen_width) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.fillStyle = brush;
    context.fill();
    context.lineWidth = pen_width;
    context.strokeStyle = pen;
    context.stroke();
}

//Draw circle
function drawCircle(x,y,radius, brush,pen, pen_width){
    var startAngle = 0 * Math.PI;
    var endAngle = 2 * Math.PI;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, true);
    context.fillStyle = brush;
    context.fill();
    context.lineWidth = pen_width;
    context.strokeStyle = pen;
    context.stroke();
}


// Draw Ellipse
function drawEllipse(x, y, width, height, brush, pen, pen_width) {
 
    var centerX = x + width / 2;
    var centerY = y + height / 2;
	
    context.beginPath();
    context.moveTo(centerX, centerY - height/2); 
    context.bezierCurveTo(centerX + width/2, centerY -  
            height/2,centerX + width/2, centerY + height/2, 
            centerX, centerY + height/2); 
    context.bezierCurveTo(centerX - width/2, centerY + 
            height/2,centerX - width/2, centerY - height/2, 
            centerX, centerY - height/2); 
    context.fillStyle = brush;
    context.fill();
    context.lineWidth = pen_width;
    context.strokeStyle = pen;
    context.stroke();
    context.closePath();	
}
//Draw line
function drawLine(x1,y1,x2,y2, pen, pen_width){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineWidth = pen_width;
    context.strokeStyle = pen;
    context.stroke();
}
//Draw Triangle
function drawTriangle(x1,y1,x2,y2,x3,y3, brush, pen, pen_width) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();
    context.lineWidth = pen_width;
    context.strokeStyle = pen;
    context.stroke();
    context.fillStyle = brush;
    context.fill();
}
// Draw Text
function drawText(x,y,text,font_name,font_size,brush, pen, pen_width){
      var text = text;
      context.font = font_size+"pt "+ font_name;
      context.textAlign = 'left';
      context.fillStyle = brush;
      var metrics = context.measureText(text);
      var width = metrics.width;
      //context.fillText(text, x+width/2, y+font_size);
       context.fillText(text, x, y+font_size);
      context.lineWidth = pen_width;
      context.strokeStyle = pen;
      context.strokeText(text, x, y+font_size);
}


// Calculate Rectangular Area
function CalcRectArea(width, height){
    return width * height;
}
