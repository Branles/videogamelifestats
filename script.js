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
let endX;

document.addEventListener('touchstart', function(event) {
  startX = event.touches[0].clientX;
});

document.addEventListener('touchend', function(event) {
  endX = event.changedTouches[0].clientX;
  const swipeDistance = endX - startX;
  if (swipeDistance > 0) {
    // swipe right
    scrollSpeed *= 0.9;
  } else {
    // swipe left
    scrollSpeed *= 1.1;
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
