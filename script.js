const square = document.getElementById('square');
let x = 0;
let y = 0;
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

let startX;
let startY;

document.addEventListener('touchstart', function(event) {
  const touch = event.touches[0];
  startX = touch.clientX;
  startY = touch.clientY;
});

document.addEventListener('touchend', function(event) {
  const touch = event.changedTouches[0];
  const endX = touch.clientX;
  const endY = touch.clientY;
  const dx = endX - startX;
  const dy = endY - startY;
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);
  if (absDx > absDy) {
    if (dx > 0) {
      // swipe right
      scrollSpeed *= 0.9;
    } else {
      // swipe left
      scrollSpeed *= 1.1;
    }
  }
});

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
