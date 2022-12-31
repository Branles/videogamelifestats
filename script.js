const square = document.getElementById('square');
let x = 0;
let y = 0;
let dx = 2;
let dy = 2;

function animate() {
  requestAnimationFrame(animate);
  x += dx;
  y += dy;
  square.style.top = y + 'px';
  square.style.left = x + 'px';

  // check for wall collisions
  const squareRect = square.getBoundingClientRect();
  if (squareRect.top < 0 || squareRect.bottom > window.innerHeight) {
    dy *= -1;
  }
  if (squareRect.left < 0 || squareRect.right > window.innerWidth) {
    dx *= -1;
  }
}

animate();
