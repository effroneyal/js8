var x = 50;
var y = 50;
var pen = "red";
var brush = "blue";
function onPageLoad()
   {    init();
      for(i=1;i<=10;i++)
     {
         drawText(x,y+20*i,i,"Ariel",14,brush, pen, 2);
     }
 
   }
   onPageLoad();