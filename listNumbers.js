function getList(){
  var number1=document.getElementById("area1").value;
  var number2=document.getElementById("area2").value;
  var string=""
  
  for (i=number1; i<=number2; i++){
    string = string+i+" ";
  }
  document.getElementById("solution").innerHTML=string;
}