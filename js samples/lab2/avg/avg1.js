var mathScore = parseInt(window.prompt("הקלד את ציונך במתמטיקה",11));
var bioScore = parseInt(window.prompt("הקלד את ציונך בביולוגיה",11));
var englishScore = parseInt(window.prompt("הקלד את ציונך באנגלית",11));
var compScore = parseInt(window.prompt("הקלד את ציונך במחשבים",11));
var geoScore = parseInt(window.prompt("הקלד את ציונך בגיאוגרפיה",11));
document.write("מתמטיקה &nbsp;&nbsp;:" + mathScore + "<br/>");
document.write("ביולוגיה &nbsp;&nbsp;:" + bioScore + "<br/>");
document.write("אנגלית &nbsp;&nbsp;:" + englishScore + "<br/>");
document.write("מחשבים &nbsp;&nbsp;:" + compScore + "<br/>");
document.write("גיאוגרפיה &nbsp;&nbsp;:" + geoScore + "<br/>");
document.write(("ממוצע &nbsp;&nbsp;:" + (mathScore + bioScore + englishScore + compScore + geoScore)/5));



