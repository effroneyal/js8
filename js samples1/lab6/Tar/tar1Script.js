var math_grade;
var eng_grade;
function onPageLoad()
   {init();
                
   }
   
   function Main() 
   {
       var tmp = window.prompt("הקלד מספר שלם חיובי ", ""); 
        math_grade = 51;
    eng_grade = 72;
     if(tmp % 2 === 0)
            
            drawText(10, 10, "זוגי", "ARIAL", 50, "red", "black", 2);
          
          else 
               drawText(10, 10, "אי זוגי", "ARIAL", 50, "red", "black", 2);
               
   }

   onPageLoad();
   Main();