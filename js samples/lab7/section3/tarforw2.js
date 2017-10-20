var x,y, width, height = 50;
var total = 0;
var pen = "red";
var brush = "blue";
var cont = true;
function onPageLoad()
   {    init();
       
       while (cont) {
       x = Math.floor(Math.random() * 500) +1; 
       y = Math.floor(Math.random() * 500) +1; 
       width = Math.floor(Math.random() * 50) +1;
       height = Math.floor(Math.random() * 50) +1;
       total = total + (width * height);
       if (total > 10000) cont = false;
       else drawRect(x, y, width, height, brush, pen, 2);
       }
     }
   onPageLoad();