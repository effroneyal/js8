var x = 0;
var y = 0;
var width = 250;
var height = 150;
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
    width = width/2;
    height = height/2;
    drawRect(x, y, width, height, "red", "blue", 1);
    drawRect(x1, y1, 0.5*width, 0.8*height,"green", "yellow", 1);
}
