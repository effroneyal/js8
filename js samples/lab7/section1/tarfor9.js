var x = 50;
var y = 50;
var minNum = 100;
var maxNum = 0;
var pen = "red";
var brush = "blue";
function onPageLoad()
   {    init();
       for (i = 1; i <= 100; i++) {
       r = Math.floor(Math.random() * 100) +1;
       if (r < minNum) minNum = r;
        if (r > maxNum) maxNum = r;   
       drawText(x + 30 * (i%10), y+ parseInt(i/10)*30 , r +", ", "Ariel", 10, brush, pen, 2);
           
       }
  drawText(x , y + 350 ,  minNum   +" המספר הקטן ביותר הוא: ", "Ariel", 20, "green", "orange", 2);
   drawText(x , y + 400 ,  maxNum   +" המספר הגבוה ביותר הוא: ", "Ariel", 20, "blue", "grey", 2);
   }
   onPageLoad();