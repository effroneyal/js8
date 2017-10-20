var x = 50;
var y = 250;
var pen = "red";
var brush = "blue";
function onPageLoad()
   {    init();
      for(i=10;i>0;i--)
     {
         drawText(x,y-20*i,i,"Ariel",14,brush, pen, 2);
     }
 
   }
   onPageLoad();