var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.beginPath();
context.rect(188, 50, 200, 100);
context.fillStyle = "red";
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
