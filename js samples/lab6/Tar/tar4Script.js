 
function onPageLoad()
   {init();
                
   }
   
   function Main() 
   {
      
       var x = parseInt(window.prompt(" הקלד את המיקום האופקי של מרכז המעגל המבוקש  ", "")); 
       var y = parseInt(window.prompt(" הקלד את המיקום האנכי של מרכז המעגל המבוקש  ", "")); 
       var radius1 = parseInt(window.prompt(" הקלד את הרדיוס של המעגל המבוקש  ", ""));
       if ((x + radius1 < widthC && x - radius1  > 0) && (y + radius1  < heightC && y - radius1  > 0)) {
           drawCircle(x, y, radius1, "red", "green", 2);
           drawText(10, 10, x + ", " + y + ", " + radius1, "ARIAL", 50, "red", "black", 2);
       }
       else {
               drawText(10, 10, "לא חוקי", "ARIAL", 50, "red", "black", 2);
               drawText(10, 70, x + ", " + y + ", " + radius1, "ARIAL", 50, "red", "black", 2);
            }
   }

   onPageLoad();
   var widthC = canvas.width;
   var heightC = canvas.height;
   Main();