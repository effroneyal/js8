var canvas = document.getElementById("myCanvas2");
var context = canvas.getContext("2d");
/* First squre  */
context.beginPath();
context.rect(0, 0, 50, 50);
context.fillStyle = "red";
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
/* Second squre  */
context.beginPath();
context.rect(450, 0, 50, 50);
context.fillStyle = "yellow";
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
/* Third squre  */
context.beginPath();
context.rect(0, 450, 50, 50);
context.fillStyle = "green";
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
/* Second squre  */
context.beginPath();
context.rect(450, 450, 50, 50);
context.fillStyle = "blue";
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
