
var calcAvg = function (course) {
    var markOK = 0;
    var grade = 11;
    do {
        grade = parseInt(window.prompt("הקלד את ציונך ב" + course, 11));
        if (grade >= 40 && grade <= 100) { grade = grade; markOK = 1; }
    }
    while (markOK != 1);
    document.write(course + "&nbsp;&nbsp;:" + grade + "<br/>");
    return grade;
}