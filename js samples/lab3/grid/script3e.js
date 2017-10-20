var canvas = document.getElementById("myCanvas3e");
var context = canvas.getContext("2d");
context.beginPath();

context.moveTo(100, 150);
context.lineTo(250, 50);
context.lineTo(210, 150);
context.lineTo(100, 150);
context.strokeStyle = 'yellow';
context.fillStyle = "red";
context.fill();
context.stroke();
