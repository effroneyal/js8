var x = 0;
var y = 0;
var width = 10;
var height =10;


function onPageLoad() {
   init();
   width = canvas.width/2;
   height = canvas.height/2;
   drawRect(x, y, width, height,"red", "blue", 2);
   window.addEventListener("click", mouseClick); 
}

function mouseClick(){
    context.clearRect(0,0,canvas.width,canvas.height);
    x = Math.floor(Math.random() * width);
    y = Math.floor(Math.random() * height);
    drawRect(x, y, width, height, "red", "blue", 1);
    }
