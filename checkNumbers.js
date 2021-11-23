function check(){
  var number=document.getElementById("area").value;
  if (number>0) document.getElementById("solution").innerHTML="positive";
  else if (number<0) document.getElementById("solution").innerHTML="negative";
  else if (number==0) document.getElementById("solution").innerHTML="zero";
  else document.getElementById("solution").innerHTML="not a number";
}