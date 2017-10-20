var inputNum1; 
var inputNum2; 
var width;
 var height;
function onPageLoad()
   { 
    init();
    if(inputNumbers()==true)
      { checkNumbers();
        drawRect(10, 10, width, height, "red", "blue", 2); 
      } else {
              drawText(10, 10, "שגוי ", "ARIAL", 50, "red", "black", 2);
             }
   }

  
   function inputNumbers()
   {  
      var tmp = window.prompt("הקלד מספר שלם חיובי ", ""); 
      var num1 = parseInt(tmp); 
      tmp = window.prompt("הקלד עוד מספר שלם חיובי ", "");
      var num2 = parseInt(tmp);
       if(num1>0 && num2>0)
         { inputNum1 = num1; 
           inputNum2 = num2; 
           return true; 
         } 
           return false; 
   }


function checkNumbers()
{ if(inputNum1>inputNum2)
   { width = inputNum1;
     height = inputNum2; 
   } else{ 
            height = inputNum1; 
            width = inputNum2; 
          }
}


      onPageLoad();
