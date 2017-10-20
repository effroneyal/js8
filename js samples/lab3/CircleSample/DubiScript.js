var canvasWidht = 500;
var canvasHeight = 500;
var x = 0;
var y = 0;
var faceSize = canvasHeight/5;
var radius = 0;
var penColor = "black";
var startAngle = 0 * Math.PI;
var endAngle = 2 * Math.PI;
var brushColor = "orange";
var lineWidth = 5;

var canvas = document.getElementById("myCanvas7");
var context = canvas.getContext("2d");
/* Face  */
radius = faceSize;
x = canvasWidht/2;
y = (canvasHeight/2)*0.8;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();
/* right ear  */
x = canvasWidht/2-100;
y = (canvasHeight/2)*0.8 - 100;
radius = faceSize * 0.4;
brushColor = "brown"
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();
/* left ear  */
x = canvasWidht/2+100;
y = (canvasHeight/2)*0.8 - 100;
radius = faceSize * 0.4;
brushColor = "brown"
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();
/* right eye  */
x = canvasWidht/2-40;
y = (canvasHeight/2)*0.8 - 40;
radius = faceSize * 0.2;
brushColor = "blue"
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();
/* left eye  */
x = canvasWidht/2+40;
y = (canvasHeight/2)*0.8 - 40;
radius = faceSize * 0.2;
brushColor = "blue"
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();
/* mouth  */
radius = faceSize*0.25;
brushColor = "red"
x = canvasWidht/2;
y = (canvasHeight/2)*0.8 + 30;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();
/* nose  */
radius = faceSize*0.15;
brushColor = "brown"
x = canvasWidht/2;
y = (canvasHeight/2)*0.8 + 20;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, true);
context.lineWidth = lineWidth;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = brushColor;
context.fill();