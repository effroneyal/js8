var canvas_width=500;
var canvas_height=500;
var x=0;
var y=0;
rectWidth=50;
rectHeight=50;
brush="red";
pen = "black";
lineWidth = 1;

var canvas = document.getElementById("myCanvas2");
var context = canvas.getContext("2d");
/* First squre  */
context.beginPath();
context.rect(x, y, rectWidth, rectHeight);
context.fillStyle = brush;
context.fill();
context.lineWidth = lineWidth;
context.strokeStyle = pen;
context.stroke();
/* Second squre  */
x = canvas_width - rectWidth;
y = 0;
brush = "yellow";
context.beginPath();
context.rect(x, y, rectWidth, rectHeight);
context.fillStyle = brush;
context.fill();
context.lineWidth = lineWidth;
context.strokeStyle = pen;
context.stroke();
/* Third squre  */
x = 0;
y = canvas_height - rectHeight ;
brush = "green";
context.beginPath();
context.rect(x, y, rectWidth, rectHeight);
context.fillStyle = brush;
context.fill();
context.lineWidth = lineWidth;
context.strokeStyle = pen;
context.stroke();
/* forth squre  */
x = canvas_width - rectWidth;
y = canvas_height - rectHeight;
brush = "blue";
context.beginPath();
context.rect(x, y, rectWidth, rectHeight);
context.fillStyle = brush;
context.fill();
context.lineWidth = lineWidth;
context.strokeStyle = pen;
context.stroke();
