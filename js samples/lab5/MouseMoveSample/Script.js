var x = 0;
var y = 0;
var radius = 25;


function onPageLoad() {
   init();
   rect = canvas.getBoundingClientRect();
   window.addEventListener("click", mouseClick);
   window.addEventListener("mousemove", mouseMove);
 
}

function mouseClick(){
    context.clearRect(0,0,canvas.width,canvas.height);
}


function mouseMove(param) {
    x = param.pageX - rect.left;
    y = param.pageY - rect.top;
    document.title = x + " - " + y;
    drawCircle(x, y, radius, "blue", "blue", 1);
}