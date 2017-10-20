var canvas = document.getElementById("myCanvas3d");
var context = canvas.getContext("2d");
var ballRadius=80;
var arcStart=0;
var arcEnd=Math.PI;
/* balls  */
context.beginPath();
context.arc(140, 160, 1.6*ballRadius, arcStart, 2*arcEnd, true);
context.fillStyle = "red";
context.fill();
context.beginPath();
context.arc(250, 180, 1.5*ballRadius, arcStart, 2*arcEnd, true);
context.fillStyle = "yellow";
context.fill();
context.beginPath();
context.arc(155, 240, 1.2*ballRadius, arcStart, 2*arcEnd, true);
context.fillStyle = "#004400";
context.fill();
context.beginPath();
context.arc(295, 240, ballRadius, arcStart, 2*arcEnd, true);
context.fillStyle = "#FF11FF";
context.fill();
context.beginPath();
context.arc(375, 240, 1.25*ballRadius, arcStart, 2*arcEnd, true);
context.fillStyle = "#0D3FFF";
context.fill();

/* IceCream bowl  */
context.beginPath();
context.arc(250, 300, 220, arcStart, arcEnd, false);
context.fillStyle = "#224466";
context.fill();
context.lineWidth = 0;
context.strokeStyle = 'black';
context.stroke();

