var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.beginPath();
context.lineWidth = 1;
context.strokeStyle = "black";
context.moveTo(50,100);
context.lineTo(50, 200);
context.lineTo(150, 200);
context.lineTo(150, 100);
context.lineTo(50, 100);
context.stroke();