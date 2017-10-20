var x = 50;
var y = 50;
var r, p, i=0;
var pen = "red";
var brush = "blue";
var cont = true;
function onPageLoad()
   {    init();
        p = Math.floor(Math.random() * 100) +1; /*   המספר שהוגרל */
       while (cont) {
       r=parseInt(window.prompt("הקלידו מספר שלם בין 1 ל 100"))
       i+=1;    
       if (r == p || i > 10) cont = false;
       }
  drawText(x , y , p  +" המספר שהוגרל הוא ", "Ariel", 20, "green", "orange", 2);
  if (i <= 10) drawText(x , y +100 , " ניחשת נכון - כל הכבוד!! ", "Ariel", 20, "green", "orange", 2);
   }
   onPageLoad();