var testScore = parseInt(window.prompt("הקלד את ציונך במבחן",100));
if (testScore >= 0 && testScore <=100)  
{
   var sqrScore = Math.sqrt(testScore);    
   var bonus = Math.round(1.8*(0.175*testScore - sqrScore -1.25));
   if (testScore > 59)
     {   document.write("<h2 style=color:blue>הבונוס שלך &nbsp;&nbsp;:" + bonus + "</h2><br/>");
         document.write("<img src=smily"+bonus+".jpg width=200 hieght=200></img>")
     }   else {  document.write("<h2 style=color:red> ציונך נמוך מ 60  ,  לצערי אינך זכאי לבונוס </h2><br/>");
                 document.write("<img src=smily21.jpg width=200 hieght=200></img>")
              }
}  else  {
    document.write("<h2 style=color:red> נא הקלד ציון תקין. על הציון להיות בין 0 ל 100 </h2><br/>");
    document.write("<img src=smily44.jpg width=200 hieght=200></img>")
         }
               