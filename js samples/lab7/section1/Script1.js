var width = 50;
var height = 50;
var pen = "red";
var brush = "red";
function onPageLoad()
   {    init();
      for(x=0;x<10;x++)
     {
         drawRect(x*60, 40, width, height, brush, pen, 1);
     }
 
   }
   onPageLoad();