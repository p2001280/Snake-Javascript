const GAME_SIZE = 600;
const SQUARE_SIZE = 20;
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const snake = new Snake(SQUARE_SIZE);
let currentDirection = "right";

function detectKeyPressed() {
  document.addEventListener("keydown", function(event) {
    event.preventDefault();
    const key = event.key;// "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    console.log(key);
    switch (key) { // change to event.key to key to use the above variable
      case "ArrowLeft":
        currentDirection = "left";
        break;
      case "ArrowRight":
        currentDirection = "right";
        break;
      case "ArrowUp":
        currentDirection = "up";
        break;
      case "ArrowDown":
        currentDirection = "down";
        break;
    }
  });
  }

function clearScreen() {
  ctx.clearRect(0,0, GAME_SIZE, GAME_SIZE);
}



function update() {
    clearScreen();
    detectKeyPressed();
    snake.update();
    setTimeout(update, 300);
}


/*Cette fonction permettra le lancement 
du jeu*/
function start() {
  update();
}

start();