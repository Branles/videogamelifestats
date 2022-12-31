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
    // change square color to a random color
    square.style.backgroundColor = getRandomColor();
  }
  if (squareRect.left < 0 || squareRect.right > window.innerWidth) {
    dx *= -1;
    // change square color to a random color
    square.style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// change square shape on click
document.addEventListener('click', function() {
  if (square.style.borderRadius === '50%') {
    square.style.borderRadius = '0';
  } else {
    square.style.borderRadius = '50%';
  }
});

animate();
