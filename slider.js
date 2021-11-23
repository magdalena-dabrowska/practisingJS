var number=Math.floor(Math.random()*5)+1;

function changeslide(){
  number++; if (number>5) number=1;

  var doc = "<img src=\"img/slide"+number+".jpg\" />";

  document.getElementById("slider").innerHTML=doc;

  setTimeout("changeslide()",2000);

}