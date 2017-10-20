var canvas2 = document.getElementById("myCanvas3b");
var context = canvas2.getContext("2d");
/* First squre 2nd canavas  */
/* First squre 2nd canavas  */
var canvasWidth = 400;
var canvasHeight = 300;
var rectWidth=100;
var rectHeight=100;
var x = (canvasWidth - rectWidth) / 2;
var y = (canvasHeight - rectHeight) / 2;
var brush = "green";
context.beginPath();
context.rect(x, y, rectWidth, rectHeight);
context.fillStyle = brush;
context.fill();
context.lineWidth = lineWidth;
context.strokeStyle = pen;
context.stroke();