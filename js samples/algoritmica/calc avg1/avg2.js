var avg = calcAvg();
if (avg < 75) {
    document.write("במידה והתלמיד לא ישפר ציוניו הוא יובא בפני ועדה  פדגוגית ");
}  else if  (avg > 90) {
    document.write("<br/> <h2> התלמיד מצטיין בלימודיו <h2>");}
       else { document.write("<br/> <h3> התלמיד עומד בדרישות המקצועיות <h3>");}