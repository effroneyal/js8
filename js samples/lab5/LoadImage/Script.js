var img = new Image();

function onPageLoad() {
   init();
   img.addEventListener("load",loadImage);    
   img.src ="flower1.png";  
}

function loadImage(){
    context.drawImage(img,100,100);    
}
