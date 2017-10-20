var x = 0;
var y = 0;
var width = 200;
var height = 100;


function onPageLoad() {
   init();
   drawRect(x, y, width, height,"blue", "blue", 1);
   window.addEventListener("mousedown", mouseDown);
   window.addEventListener("mouseup", mouseUp);
 
}



function mouseDown(param){
    context.clearRect(0,0,canvas.width,canvas.height);
    x = param.x - width/2;
    y = param.y - height / 2;
    drawRect(x, y, width, height,"blue", "blue", 1);
}

function mouseUp(param){
    context.clearRect(0,0,canvas.width,canvas.height);
    x = param.x - (width-10)/2;
    y = param.y - (height-10)/2;
    drawRect(x, y, width-10, height-10,"blue", "blue", 1);
}
