function mudarCor() {
  var button = document.getElementById("Botao");
  button.style.backgroundColor = "hsl(158, 42%, 18%)";
}

function voltarCor() {
  var button = document.getElementById("Botao");
  button.style.backgroundColor = ""; 
}

var button = document.getElementById("Botao");

button.addEventListener("mousedown", mudarCor); 
button.addEventListener("mouseup", voltarCor); 
button.addEventListener("touchstart", mudarCor);
button.addEventListener("touchend", voltarCor); 
