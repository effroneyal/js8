var canvasWidht = 500;
var canvasHeight = 500;
var x = 0;
var y = 0;
var radius = 50;
var penColor = "black";
var startAngle = 0 * Math.PI;
var endAngle = 2 * Math.PI;
var brushColor = "yellow";
var lineWidth = 5;

var canvas = document.getElementById("myCanvas5");
var context = canvas.getContext("2d");
/* First Circle  */
x = radius + lineWidth ;
y = radius + lineWidth;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();
/* Second Circle  */
x = canvasWidht -(radius + lineWidth) ;
y = radius + lineWidth;
brushColor = "blue";
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();
/* Third Circle  */
x = radius + lineWidth ;
y = canvasHeight - (radius + lineWidth);
brushColor = "red";
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();
/* Forth Circle  */
x = canvasWidht -(radius + lineWidth) ;
y = canvasHeight - (radius + lineWidth);
brushColor = "green";
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();