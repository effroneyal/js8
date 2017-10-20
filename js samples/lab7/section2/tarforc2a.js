var x = 600;
var y = 600;
var z = Math.floor(x/50);
var pen = "red";
var brush = "black";
function onPageLoad()
   {    init();
       for (i = 0; i <12; i++) 
          drawRect(50*i, 0, 48, 48, brush, pen, 1);
           for (j = 1; j <11; j++) 
           {
               for (k = 0; k<12; k++)
               if (k==0 ||k==11 ) drawRect(50*k, 50*j, 48, 48, brush, pen, 1);
               else drawRect(50*k, 50*j, 48, 48, "yellow", "yellow", 1);
           }
         for (p = 0; p <12; p++) 
          drawRect(50*p, 550, 48, 48, brush, pen, 1);  
          
       
   }
   onPageLoad();