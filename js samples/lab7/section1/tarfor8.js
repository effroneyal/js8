var x = 50;
var y = 50;
var r, total=0;
var pen = "red";
var brush = "blue";
function onPageLoad()
   {    init();
       for (i = 1; i <= 100; i++) {
       r = Math.floor(Math.random() * 100) +1;
       total=total + r;    
       drawText(x + 30 * (i%10), y+ parseInt(i/10)*30 , r +", ", "Ariel", 10, brush, pen, 2);
           
       }
  drawText(x , y + 350 , total/100  +" ממוצע המספרים הוא: ", "Ariel", 20, "green", "orange", 2);
   }
   onPageLoad();