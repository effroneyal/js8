var x = 0;
var y = 0;
var radius = 25;
var rect;


function onPageLoad() {
   init();
   rect = canvas.getBoundingClientRect();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
   
}


function onKeyDown(key){
     context.clearRect(0, 0, canvas.width, canvas.height);
     x = x + 1 ;
     y = y + 1;
     drawCircle(x, y, radius, "red", "red" , 1);
   
}
function onKeyUp(key){
     drawCircle(x, y, radius, "blue", "blue", 1);  
}


