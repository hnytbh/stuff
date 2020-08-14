var clicker = document.querySelector("#clicker");
clicker.addEventListener("click", counter);

var i = 0;
var font = 17;
var a = 16;
var b = 45;
var c = 16; 
var d = 45;
function counter() {
  i++;
  if(i <= 500 ){
   font = font + 0.2; 
   a = a + 0.2;
   b = b + 0.2;
   c = c + 0.2;
   d = d + 0.2;
  }

  clicker.innerHTML = i;
  clicker.style.fontSize = font + "px";
  clicker.style.padding = a + "px" + b + "px" + c + "px" + d + "px"
} 


