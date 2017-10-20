var canvas = document.getElementById("myCanvas3d");
var context = canvas.getContext("2d");
var opts = {
  distance : 50,
  lineWidth : 1,
  gridColor  : "#66FF00",
  caption : false
};
new Grid(opts).draw(context);

drawRect(100, 200, 500, 240, "grey", "black", 1);
drawRect(180, 270, 75, 150, "white", "black", 2);
drawRect(350, 240, 200, 60, "white", "black", 1);
drawTriangle(104,200,350,95,596,200, "white", "black", 3)

