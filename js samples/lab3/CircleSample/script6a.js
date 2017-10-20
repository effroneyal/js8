var canvas = document.getElementById("myCanvas6a");
var context = canvas.getContext("2d");
var canvasWidht = 500;
var canvasHeight = 500;
var x = 0;
var y = 0;
var radius = 150;
var penColor = "black";
var startAngle = 0 * Math.PI;
var endAngle = 2 * Math.PI;
var brushColor = "yellow";
var lineWidth = 5;
/* First Circle  */
x = canvasWidht/2 ;
y = canvasHeight/2;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();
/* Second Circle  */
radius = 100;
brushColor = "red"
x = canvasWidht/2 ;
y = canvasHeight/2;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();
