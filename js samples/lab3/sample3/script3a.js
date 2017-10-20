var canvas = document.getElementById("myCanvas3a");
var context = canvas.getContext("2d");
/* First squre  */
context.beginPath();
context.rect(100, 100, 300, 300);
context.fillStyle = "red";
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
/* Second squre  */
context.beginPath();
context.rect(150, 150, 200, 200);
context.fillStyle = "yellow";
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
var canvas2 = document.getElementById("myCanvas3b");
var context = canvas2.getContext("2d");
/* First squre 2nd canavas  */
context.beginPath();
context.rect(100, 100, 100, 100);
context.fillStyle = "blue";
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();