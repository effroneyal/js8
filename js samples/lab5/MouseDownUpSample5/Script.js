var x1 = 0;
var y1 = 0;
var rect;


function onPageLoad() {
   init();
   rect = canvas.getBoundingClientRect();
   window.addEventListener("mousedown", mouseDown);
   window.addEventListener("mouseup", mouseUp);
 
}


function mouseDown(param){
    x1 = param.x - rect.left;
    y1 = param.y- rect.top;    
    }

function mouseUp(param){
   context.clearRect(0,0,canvas.width,canvas.height);
    x2 = param.x - rect.left;
    y2 = param.y- rect.top;
    drawRect(x1, y1, x2 - x1, y2 - y1 ,"green", "green", 0);
}
