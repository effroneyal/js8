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