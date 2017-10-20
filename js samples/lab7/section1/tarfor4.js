var x = 50;
var y = 50;
var pen = "red";
var brush = "blue";
function onPageLoad()
   {    init();
      for(i=25;i<38;i++)
     {
         drawText(x,y+20*(i-25),i,"Ariel",14,brush, pen, 2);
     }
 
   }
   onPageLoad();