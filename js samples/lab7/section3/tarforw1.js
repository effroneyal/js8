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
       r = Math.floor(Math.random() * 100) +1;
       i+=1;    
       drawText(x + 30 * (i%10), y+ parseInt(i/10)*30 , r +", ", "Ariel", 10, brush, pen, 2);
       if (r == p) cont = false;
       }
  drawText(x , y+ parseInt(i/10)*30 + 50 , r  +" המספר שהוגרל הוא ", "Ariel", 20, "green", "orange", 2);
   }
   onPageLoad();