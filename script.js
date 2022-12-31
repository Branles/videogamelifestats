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
    square.style.backgroundColor = getRandomColor();
  }
  if (squareRect.left < 0 || squareRect.right > window.innerWidth) {
    dx *= -1;
    square.style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener('click', function() {
  square.style.width = Math.random() * 100 + 'px';
  square.style.height = Math.random() * 100 + 'px';
});

animate();
