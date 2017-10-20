var img = new Image();
var x = 0;
var y = 0;
var width = 500;
var height = 300;


function onPageLoad() {
   init();
   drawRect(x, y, width, height,"red", "blue", 2);
   window.addEventListener("click", mouseClick); 
}

function loadImage(){
    context.drawImage(img,100,100);    
}

function mouseClick(){
    context.clearRect(0,0,canvas.width,canvas.height);
    x=x+1;
    y=y+1;
    width = width - 2;
    height = height - 2;
    drawRect(x, y, width, height, "red", "blue", 1);
}
