var x = 100;
var y = 150;
var width = 200;
var height = 100;
var brush = "red";
var pen = "black";
var lineWidth = 2;


var canvas = document.getElementById("myCanvas2");
var context = canvas.getContext("2d");
/* First squre  */
context.beginPath();
context.rect(x, y, width, height);
context.fillStyle = brush;
context.fill();
context.lineWidth = lineWidth;
context.strokeStyle = pen;
context.stroke();
/* Second squre  */
x = x + 20;
y = y + 20;
brush = "yellow";
pen = "blue";
context.beginPath();
context.rect(x, y, width, height);context.rect(x, y, width, height);
context.fillStyle = brush;
context.fill();
context.lineWidth = lineWidth;
context.strokeStyle = pen;
context.stroke();