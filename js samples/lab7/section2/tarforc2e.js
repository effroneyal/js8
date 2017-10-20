var x = 600;
var y = 600;
var z = Math.floor(x/50);
var pen = "red";
var brush = "red";
function onPageLoad()
   {    init();
       for (i = 0; i<10; i++) 
           for (j = i; j <10 ; j++) 
           {
              drawRect(60*j, 60*i, 50, 50, brush, pen, 0);
              
           }
                       
   }
   onPageLoad();