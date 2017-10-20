
var calcAvg = function () {
    var markOK = 0;
    do {
        var mathScore = parseInt(window.prompt("הקלד את ציונך במתמטיקה", 11));
        if (mathScore >= 40 && mathScore <= 100) { mathScore = mathScore; markOK = 1; } 
    }
    while (markOK != 1);
    do {
        markOK = 0;
        var bioScore = parseInt(window.prompt("הקלד את ציונך בביולוגיה", 11));
        if (bioScore >= 40 && bioScore <= 100) { bioScore = bioScore; markOK = 1; } 
    }
    while (markOK != 1);
     do {
        markOK = 0;
    var englishScore = parseInt(window.prompt("הקלד את ציונך באנגלית", 11));
    if (englishScore >= 40 && englishScore <= 100) { englishScore = englishScore; markOK = 1; }
     }
    while (markOK != 1);
    var compScore = parseInt(window.prompt("הקלד את ציונך במחשבים", 11));
    if (compScore >= 40 && compScore <= 100) { compScore = compScore; } else { compScore = 40; }
    var geoScore = parseInt(window.prompt("הקלד את ציונך בגיאוגרפיה", 11));
    if (geoScore >= 40 && geoScore <= 100) { geoScore = geoScore; } else { geoScore = 40; }
    document.write("מתמטיקה &nbsp;&nbsp;:" + mathScore + "<br/>");
    document.write("ביולוגיה &nbsp;&nbsp;:" + bioScore + "<br/>");
    document.write("אנגלית &nbsp;&nbsp;:" + englishScore + "<br/>");
    document.write("מחשבים &nbsp;&nbsp;:" + compScore + "<br/>");
    document.write("גיאוגרפיה &nbsp;&nbsp;:" + geoScore + "<br/>");
    //document.write(("ממוצע &nbsp;&nbsp;:" +mathScore + bioScore + englishScore + compScore + geoScore)/5);
    avg = (mathScore + bioScore + englishScore + compScore + geoScore) / 5;
    return avg;
}