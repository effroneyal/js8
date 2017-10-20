var x = 600;
var y = 600;
var z = Math.floor(x/50);
var pen = "red";
var brush = "red";
function onPageLoad()
   {    init();
       for (i = 0; i <11; i++) 
           for (j = 0; j <11; j++) 
           {
              drawRect(60*j, 60*i, 50, 50, brush, pen, 0);
              
           }
                       
   }
   onPageLoad();