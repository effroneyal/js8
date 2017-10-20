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
   // קבלת הקשר לקנבס
  var canvas = document.getElementById("pongCanvas"); 
  var context = canvas.getContext("2d");
 // ציור לוח תוצאות 1 
 context.beginPath();
 context.rect(player1ScoreX, player1ScoreY, playerScoreWidth, playerScoreHeight);
 context.fillStyle = scoreBoardBrush; context.fill(); 
 context.lineWidth = 1; 
 context.strokeStyle = scoreBoardPen;
 context.stroke();
   // ציור לוח תוצאות 2 
 context.beginPath(); 
 context.rect(player2ScoreX, player2ScoreY, playerScoreWidth, playerScoreHeight);
 context.fillStyle = scoreBoardBrush; 
 context.fill(); 
 context.lineWidth = 1; 
 context.strokeStyle = scoreBoardPen;
 context.stroke();
     // ציור קו אמצע
 context.beginPath();
 context.strokeStyle = middleLinePen;
 context.lineWidth = middleLineWidth;
 context.moveTo(middleLineX1,middleLineY1);
 context.lineTo(middleLineX2,middleLineY2 );
 context.stroke();
      // ציור מחבט 1 
 context.beginPath();
 context.rect(player1BoardX, player1BoardY, playerBoardWidth, playerBoardHeight);
 context.fillStyle = playerBoardBrush; 
 context.fill();
 context.lineWidth = 1; 
 context.strokeStyle = playerBoardPen; 
 context.stroke();
   // ציור מחבט 2
 context.beginPath(); 
 context.rect(player2BoardX, player2BoardY, playerBoardWidth, playerBoardHeight); 
 context.fillStyle = playerBoardBrush;
 context.fill(); 
 context.lineWidth = 1;
 context.strokeStyle = playerBoardPen;
 context.stroke();
      // ציור הכדור
 context.beginPath(); 
 context.arc(ballX, ballY, ballRadius, 0, 2*Math.PI, true);
 context.lineWidth = 2; 
 context.strokeStyle = ballPen; 
 context.stroke(); 
 context.fillStyle = ballBrush; 
 context.fill();