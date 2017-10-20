    init();
    var width = 50;
    var height = 200;
    var color = "green";
    var battery = parseInt(window.prompt(" הקלד את רמת הטעינה (באחוזים) של הסוללה"));
    height = battery * 2;
    if (battery > 70) color = "green";
    else if (battery >= 40 && battery <= 70) color = "blue";
    else if (battery >= 20 && battery < 40) color = "orange";
    else color = "red";
    /*             ציור מסגרת הסוללה - אופציונלי  */
    drawRect(10, 10, width, 200, "white", "black", 1);
    drawRect(30, 2, width/5, 8, "silver", "black", 1);
     /*                 ציור הסוללה - גובה וצבע    */
    drawRect(10, 210-height, width, height, color, "black", 0);
