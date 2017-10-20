var math_grade;
var eng_grade;
function onPageLoad()
   {init();
    math_grade = 91;
    eng_grade = 72;
     if(math_grade > 90 && eng_grade > 80)
          {  
            drawText(10, 10, "מעולה", "ARIAL", 50, "red", "black", 2);
          }
       if (math_grade > 90 || eng_grade > 80)
          {
           drawText(10, 70, "מעולה", "ARIAL", 50, "red", "black", 2);
          }
   }
   onPageLoad();