var x = 50;
var y = 50;
var atzeret=1;
var pen = "red";
var brush = "blue";
function onPageLoad()
   {    init();
      for(i=1;i<=20;i++)
     {
        if (i % 2 == 0) pen="blue"; else pen="red";
         drawText(x,y+20*i,i,"Ariel",14,brush, pen, 2);
     }

   }
   onPageLoad();