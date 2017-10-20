var math_grade;
var eng_grade;
function onPageLoad()
   {init();
    math_grade = 91;
    eng_grade = 72;
     var result = math_grade > 90 && eng_grade > 80; 
     drawText(10, 10, result, "ARIAL", 50, "red", "black", 2);
     result = math_grade > 90 || eng_grade > 80; 
     drawText(10, 70, result, "ARIAL", 50, "red", "black", 2);
   }
   onPageLoad();