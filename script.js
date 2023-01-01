const square = document.getElementById('square');
let x = (window.innerWidth - square.clientWidth) / 2;
let y = (window.innerHeight - square.clientHeight) / 2;
let dx = 2;
let dy = 2;
let scrollSpeed = 1;

function animate() {
  requestAnimationFrame(animate);
  x += dx * scrollSpeed;
  y += dy * scrollSpeed;
  square.style.top = y + 'px';
  square.style.left = x + 'px';

  // check for wall collisions
  const squareRect = square.getBoundingClientRect();
  if (squareRect.top < 5) {
    dy *= -1;
    square.style.backgroundColor = getRandomColor();
  }
  if (squareRect.bottom > window.innerHeight - 5) {
    dy *= -1;
    square.style.backgroundColor = getRandomColor();
  }
  if (squareRect.left < 5) {
    dx *= -1;
    square.style.backgroundColor = getRandomColor();
  }
  if (squareRect.right > window.innerWidth - 5) {
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
  const scale = Math.random() + 0.5; // random value between 0.5 and 1.5
  square.style.transform = `scale(${scale})`;
});

document.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    // scroll down
    scrollSpeed *= 0.9;
  } else {
    // scroll up
    scrollSpeed *= 1.1;
  }
});

animate();
