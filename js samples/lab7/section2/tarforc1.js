//var x = canvas.width;
//var y = canvas.hieght;
var x = 600;
var y = 600;
var z = Math.floor(x/60);
var pen = "red";
var brush = "black";
function onPageLoad()
   {    init();
       for (i = z; i > 0; i--) {
          drawRect(x/2 + 15 - 30*i, y/2 -15 - 30*i, 60*i, 60*i,brush, pen, 1);
          
       }
   }
   onPageLoad();