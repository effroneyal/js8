var x;
var count1 = 0;
var sumNumbers = 0;
x = parseInt(window.prompt("הקלידו ציון", 10));
while (x != 999)
  {
      if (0 <= x  && x <= 100) 
        { count1++;
          sumNumbers = sumNumbers + x;
          document.write(x + "&nbsp;</br>"); 
        } 
      else window.alert("המספר הקלדתם אינו חוקי, נא נסו שנית");
    x = parseInt(window.prompt("הקלידו ציון", 10));   
  }

document.write("מספר הציונים שהוקלדו: &nbsp;&nbsp;" + count1 + "</br>"); 
document.write("סכום הציונים שהוקלדו: &nbsp;&nbsp;" + sumNumbers + "</br>"); 
document.write("ממוצע הציונים שהוקלדו: &nbsp;&nbsp;" + sumNumbers/count1 + "</br>"); 