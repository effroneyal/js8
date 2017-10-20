var j;
var count = 0;
var total = 0;
for (j = 16; j < 20;j++ )
 {
    count++;
    if (count % 2 == 1)
     {
       total = total + count;
       document.write(total + "</br>");
    }
  }
document.write(total/count);