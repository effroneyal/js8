var x;
var count1 = 0;
var sumNumbers = 0;
window.alert("הקלידו את תוצאות תחרות הקליעות. ערכים אפשריים 0- 10. הערך 22 יסמן את סיום הקלדת הנתונים")
x = parseInt(window.prompt("הקלידו מספר קליעות לתלמיד", 0));
while (x != 22)
  {
      if (0 <= x  && x <= 10) 
        { count1++;
          sumNumbers = sumNumbers + x;
          document.write(x + "&nbsp;</br>"); 
        } 
      else window.alert("המספר הקלדתם אינו חוקי, נא נסו שנית");
   x = parseInt(window.prompt("הקלידו מספר קליעות לתלמיד", 0)); 
  }

document.write("מספר התלמידים שהשתתפו בתחרות: &nbsp;&nbsp;" + count1 + "</br>"); 
document.write("סך הנקודות שצברה הכיתה: &nbsp;&nbsp;" + sumNumbers + "</br>"); 
document.write("ממוצע סלים לתלמיד: &nbsp;&nbsp;" + sumNumbers/count1 + "</br>"); 