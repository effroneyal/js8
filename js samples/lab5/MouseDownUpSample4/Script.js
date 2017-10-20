var x = 0;
var y = 0;
var width = 100;
var height = 100;
var rect;


function onPageLoad() {
   init();
   rect = canvas.getBoundingClientRect();
   drawCircle(x + width/2, y + height/2, width,"green", "green", 0);
   window.addEventListener("mousedown", mouseDown);
   window.addEventListener("mouseup", mouseUp);
 
}


function mouseDown(param){
    context.clearRect(0,0,canvas.width,canvas.height);
    x = param.x - rect.left - width/2;
    y = param.y- rect.top - height/2 ;    
    drawRect(x, y, width, height ,"red", "red", 0);
}

function mouseUp(param){
   
    drawCircle(x + width/2, y + height/2, width/2 ,"green", "green", 0);
}
