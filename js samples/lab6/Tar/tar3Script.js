var math_grade;
var eng_grade;
function onPageLoad()
   {init();
                
   }
   
   function Main() 
   {
       var tmp1 = parseInt(window.prompt("הקלד מספר ראשון שלם  ", "")); 
       var tmp2 = parseInt(window.prompt("הקלד מספר שני שלם ", "")); 
       var tmp3 = parseInt(window.prompt("הקלד מספר שלישי שלם ", "")); 
      
     if(tmp1 === tmp2 && tmp1 === tmp3)
            
            drawText(10, 10, "חוקי וכולם שווים", "ARIAL", 50, "red", "black", 2);
          
          else 
              drawText(10, 10, "לא חוקי", "ARIAL", 50, "red", "black", 2);
               
   }

   onPageLoad();
   Main();