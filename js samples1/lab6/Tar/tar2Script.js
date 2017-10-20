var math_grade;
var eng_grade;
function onPageLoad()
   {init();
                
   }
   
   function Main() 
   {
       var tmp1 = parseInt(window.prompt("הקלד מספר ראשון שלם  ", "")); 
       var tmp2 = parseInt(window.prompt("הקלד מספר שני שלם ", "")); 
      
     if(tmp1 > tmp2)
            
            drawText(10, 10, tmp1 + ":   הגדול", "ARIAL", 50, "red", "black", 2);
          
          else 
              drawText(10, 10, tmp2 + ":   הגדול", "ARIAL", 50, "red", "black", 2);
               
   }

   onPageLoad();
   Main();