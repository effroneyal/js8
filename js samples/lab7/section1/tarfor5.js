var x = 50;
var y = 50;
var atzeret=1;
var pen = "red";
var brush = "blue";
var a = parseInt(window.prompt("הקש מספר שלם הקטן מ 20"));
function onPageLoad()
   {    init();
      for(i=1;i<=a;i++)
     {
         atzeret = atzeret * i;
         
     }
 drawText(x,y,a +"!= " +atzeret,"Ariel",34,brush, pen, 2);
   }
   onPageLoad();