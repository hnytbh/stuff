var colorChanger = document.querySelector("#colorChanger");
colorChanger.addEventListener("click", changeColor);

function changeColor() {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256) 
  var b = Math.floor(Math.random() * 256)

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
}