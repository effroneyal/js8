var number1 = 3856;
var x = 0;

while (number1 != 0)
  {
      x++;
      number1 = Math.floor(number1/10);
      //document.write(number1);
    }
    document.write("יציאה" + x)