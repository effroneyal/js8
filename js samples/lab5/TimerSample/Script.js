var x = 0;
var y = 0;
var width = 200;
var height = 100;
var timer;



function onPageLoad() {
   init();
   drawRect(x, y, width, height,"red", "blue", 2);
   timer = window.setInterval(moveRect, 100);
   window.addEventListener("click", mouseClick); 
}

function mouseClick(){
       window.clearTimeout(timer);
}

function moveRect(){
     context.clearRect(0,0,canvas.width,canvas.height);
     x=x+1;
     y=y+1;
     drawRect(x, y, width, height,"red", "blue", 1);
}
