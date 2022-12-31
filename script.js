const square = document.getElementById("square");

setInterval(function() {
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  let color = '#'+Math.floor(Math.random()*16777215).toString(16);
  square.style.top = x + "px";
  square.style.left = y + "px";
  square.style.backgroundColor = color;
}, 100);
