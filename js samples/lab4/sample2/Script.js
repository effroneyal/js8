init();
var rectW = parseInt(window.prompt("���� �� ���� ����� ������",50));
var rectH = parseInt(window.prompt("���� �� ���� ����� ������ ",50));
var RectArea = CalcRectArea(rectW, rectH);
drawRect(50, 50, rectW, rectH, "green", "yellow", 7);
document.write("<p style=color:blue >" +  " &nbsp;" + rectH + "&nbsp; X &nbsp;" + rectW + "= &nbsp;" + RectArea + "&nbsp;&nbsp;&nbsp;square area </p>");

