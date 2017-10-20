function drawHouse(){
    drawResidence();
    drawRoof();
    drawDoor();
    drawWindows();
}
function drawResidence(){
    drawRect(100, 125, 300, 150,"Wheat","black",1);
}
function drawRoof(){
    drawTriangle(100, 125, 250, 50, 400, 125, "red", "black", 1);
}
function drawDoor(){
    drawRect(150, 175, 50, 100,"peru","black",4);
}
function drawWindows(){
    drawRect(250, 175, 100, 50,"LightCyan","black",2);
}
