const square = document.getElementById("square");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const squareSize = 200; // Adjust the size of the square if needed

let x = (screenWidth - squareSize) / 2;
let y = (screenHeight - squareSize) / 2;
let speedX = 2;
let speedY = 2;

function updateSquarePosition() {
    x += speedX;
    y += speedY;

    if (x + squareSize > screenWidth || x < 0) {
        speedX *= -1;
    }

    if (y + squareSize > screenHeight || y < 0) {
        speedY *= -1;
    }

    square.style.left = x + "px";
    square.style.top = y + "px";

    requestAnimationFrame(updateSquarePosition);
}

updateSquarePosition();

