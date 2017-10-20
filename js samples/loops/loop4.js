var choice1=0;
var choice2=0;
var numOfStudents = 6;
window.alert("הקלידו את תוצאות ההצבעה לכל תלמיד. ערכים אפשריים 1, 2, 3. מטעמי נוחות בדוגמא זו מספר התלמידים שהשתתפו בסקר הוא " + numOfStudents);
window.alert("בדוגמא זו אין בדיקה לגבי תקינות הקלט");

for (i = 1; i <= numOfStudents; i++)
 {
    var choice = window.prompt(" הקישו בחירתכם ");
     if (choice == "1") choice1++;
    else if (choice == "2") choice2++; 
  }
document.write(" מספר התלמידים המרוצים מאוד משירותי ההסעה: &nbsp;" + choice1 + "<br/>");
document.write(" מספר התלמידים המרוצים באופן חלקי משירותי ההסעה: &nbsp;" + choice2 + "<br/>");
var choice3 = numOfStudents - choice1 - choice2;
document.write(" מספר התלמידים שאינם מרוצים  משירותי ההסעה: &nbsp;" + choice3);