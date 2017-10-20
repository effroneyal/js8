var i = 0;
var markSum = 0;
var markSum = markSum + calcAvg("מתמטיקה");
i++;
markSum = markSum + calcAvg("אנגלית");
i++;
markSum = markSum + calcAvg("ביולוגיה");
i++;
markSum = markSum + calcAvg("מחשבים");
i++;
markSum = markSum + calcAvg("גיאוגרפיה");
i++;
var avg = markSum / i;
 document.write("<br/> <br/> <h2> ממוצע ציונייך הוא : &nbsp;" + avg + "<h2>");
if (avg < 75) {
    document.write("במידה והתלמיד לא ישפר ציוניו הוא יובא בפני ועדה  פדגוגית ");
}  else if  (avg > 90) {
    document.write("<br/> <h2> התלמיד מצטיין בלימודיו <h2>");}
       else { document.write("<br/> <h3> התלמיד עומד בדרישות המקצועיות <h3>");}