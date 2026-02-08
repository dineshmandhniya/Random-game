// game.js

// Character movement
const player = { x: 50, y: 50, speed: 5, points: 0 };

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            player.y -= player.speed;
            break;
        case 'ArrowDown':
            player.y += player.speed;
            break;
        case 'ArrowLeft':
            player.x -= player.speed;
            break;
        case 'ArrowRight':
            player.x += player.speed;
            break;
    }
});

// Point collection
document.addEventListener('collision', (object) => {
    if (object.type === 'point') {
        player.points += object.value;
        console.log('Points: ', player.points);
    }
});

// Enemies
const enemies = [
    { x: 100, y: 100, speed: 2 }, // Sample enemy
];

// Move enemies function
function moveEnemies() {
    enemies.forEach(enemy => {
        enemy.x += enemy.speed;
        // Add logic for enemy movement
    });
}

// Obstacles
const obstacles = [
    { x: 150, y: 150, width: 50, height: 50 }, // Sample obstacle
];

// Collision detection
function detectCollisions() {
    enemies.forEach(enemy => {
        if (player.x < enemy.x + 20 &&
            player.x + 20 > enemy.x &&
            player.y < enemy.y + 20 &&
            player.y + 20 > enemy.y) {
            console.log("Collision with enemy!");
        }
    });
    obstacles.forEach(obstacle => {
        if (player.x < obstacle.x + obstacle.width &&
            player.x + 20 > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + 20 > obstacle.y) {
            console.log("Collision with obstacle!");
        }
    });
}

// Main game loop
function gameLoop() {
    moveEnemies();
    detectCollisions();
    requestAnimationFrame(gameLoop);
}

gameLoop();