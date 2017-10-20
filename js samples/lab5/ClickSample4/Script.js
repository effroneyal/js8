var x = 0;
var y = 0;
var width = 200;
var height = 100;
var x1 = width;
var y1 = height;


function onPageLoad() {
   init();
   drawRect(x, y, width, height,"red", "blue", 2);
   drawRect(x1, y1, 0.5*width, 0.8*height,"green", "yellow", 2);
   window.addEventListener("click", mouseClick); 
}

function mouseClick(){
    context.clearRect(0,0,canvas.width,canvas.height);
    var x2 = x;
    var y2 = y;
    x = x1;
    y = y1;
    x1 = x2;
    y1 = y2;
    drawRect(x, y, width, height, "red", "blue", 1);
    drawRect(x1, y1, 0.5*width, 0.8*height,"green", "yellow", 1);
}
