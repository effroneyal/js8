// הגדרת משתנים
var canvasWidth = 800;
 var canvasHeight = 600;
 var player1ScoreX = 75;
 var player1ScoreY = 0; 
 var player2ScoreX = 625; 
 var player2ScoreY = 0;
 var playerScoreWidth = 100; 
 var playerScoreHeight = 50;
 var scoreBoardBrush = "blue";
 var scoreBoardPen = "yellow";
 var middleLineX1 = 400;
 var middleLineY1 = 0; 
 var middleLineX2 = 400; 
 var middleLineY2 = 600; 
var middleLinePen = "white"; 
var middleLineWidth = 4;
 var ballX = 400;
  var ballY = 300; 
  var ballRadius = 15
  var ballBrush = "yellow";
  var ballPen = "orange"; 
  var player1BoardX = 25; 
  var player1BoardY = 225;
  var playerBoardWidth = 25; 
  var playerBoardHeight = 150;
  var playerBoardBrush = "green";
  var playerBoardPen = "brown"; 
  var player2BoardX = 750; 
  var player2BoardY = 225;
  // משתנים עבור ניקוד בלוח התוצאות
var scoreFont = "Arial";
var scoreFontSize = 20;
var scoreFontBrush = "red";
var scoreFontPen = "yellow";
var player1Score = 0;
var player2Score = 0;

   // קבלת הקשר לקנבס
  var canvas = document.getElementById("pongCanvas"); 
  var context = canvas.getContext("2d");

 // ציור לוח הניקוד
function drawScoreBoard(x,y){
    drawRect(x, y, playerScoreWidth, playerScoreHeight, scoreBoardBrush, scoreBoardPen, 1);
}
// ציור קו האמצע
function drawMiddleLine() {
    drawLine(middleLineX1, middleLineY1, middleLineX2, middleLineY2, middleLinePen, middleLineWidth);
}
// ציור קרש של שחקן
function drawPlayerBoard(x,y){
    drawRect(x, y, playerBoardWidth, playerBoardHeight, playerBoardPen, 2);
}
// ציור כדור
function drawBall(){
    drawCircle(ballX, ballY, ballRadius, ballBrush, ballPen, 1);
}
// כתיבת הניקוד של השחקן
function initScore(){
    drawText(player1ScoreX+10, player1ScoreY+10,player1Score, scoreFont, scoreFontSize, scoreFontBrush, scoreFontPen, 1);
    drawText(player2ScoreX+10, player2ScoreY+10,player2Score, scoreFont, scoreFontSize, scoreFontBrush,scoreFontPen, 1);
}
// פונקצית איתחול המשחק
function initGameBoard(){
    drawScoreBoard(player1ScoreX, player1ScoreY );
    drawScoreBoard(player2ScoreX, player2ScoreY );
    initScore();
    drawMiddleLine();
    drawPlayerBoard(player1BoardX, player1BoardY);
    drawPlayerBoard(player2BoardX, player2BoardY);
    drawBall();
}
 