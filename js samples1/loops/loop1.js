var x;
var validNum = 0;
var sumNumbers = 0;
while (validNum != 1)
  {
      x = parseInt(window.prompt("הקלידו מספר שלם שערכו בין 10 ל 99", 10));
      if (10 <= x  && x <= 99)  validNum = 1;
        else window.alert("המספר הקלדתם אינו חוקי, נא נסו שנית");     
  }
  for (var k = 10; k <= x; k++) 
    {
        if (k % 3 == 0) sumNumbers = sumNumbers + k;
        else if (k % 5 == 0) sumNumbers = sumNumbers + k;
    }
    document.write( "&nbsp; סכום המספרים מ 10 ועד &nbsp;" +  x + "&nbsp;&nbsp;המתחלקים ב 3 ו ב 5 הינם&nbsp;&nbsp; &nbsp; " + sumNumbers );