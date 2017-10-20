var canvas_width=500;
var canvas_height=500;
var x=0;
var y=0;
rectWidth=50;
rectHeight=50;
var brush=["red", "yellow", "blue", "black", "grey", "pink", "green", "brown", "orange", "magenta"];
pen = "black";
lineWidth = 1;

var canvas = document.getElementById("myCanvas2");
var context = canvas.getContext("2d");
var myNum = parseInt(window.prompt("הקלד מספר בין 0 ל 9",1));
myNum = myNum % 10;
for (var i=0; i < myNum; i++) 
{
    if (myNum === 0)
     { 
     drawEllipse(300, 250, 400, 200, "yellow", pen, lineWidth);
     } 
    else {
        drawRect(x, y, rectWidth, rectHeight, brush[i], pen, lineWidth);
        x = x + canvas_width / myNum;
        y = y + canvas_height / myNum;
       }
  }
