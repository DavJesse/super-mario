export function loadBrickBreaker() {
    const gameContainer = document.getElementById("game-container");

    // Create paddle
    const paddle = document.createElement("div");
    paddle.id = "paddle";
    gameContainer.appendChild(paddle);

    // Create movement
    const ball = document.createElement("div");
    ball.id = "ball";
    gameContainer.paddle.appendChild(ball);

     // Create bricks
     const bricks = document.createElement("div");
     bricks.id = "bricks";
     gameContainer.appendChild(bricks);

      // Create paddle
    const script = document.createElement("script");
    script.src = "brick_breaker/js/brick_breaker.js";
    script.defer = true;
    document.body.appendChild(script);
}