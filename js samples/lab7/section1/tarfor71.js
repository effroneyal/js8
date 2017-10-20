var x = 50;
var y = 50;
var pen = "red";
var brush = "blue";
function onPageLoad()
   {    init();
       for (i = 1; i <= 100; i++) {
           if ((i % 3 != 0) && (i % 7 != 0) ) drawText(x + 30 * (i%10), y+ parseInt(i/10)*30 , i+", ", "Ariel", 10, brush, pen, 2);
           
       }
   }
   onPageLoad();