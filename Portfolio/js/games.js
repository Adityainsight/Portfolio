// Terminal-based games module

export class SnakeGame {
    constructor(terminal) {
        this.term = terminal;
        this.canvas = null;
        this.ctx = null;
        this.snake = [];
        this.food = {};
        this.direction = 'right';
        this.nextDirection = 'right';
        this.score = 0;
        this.gameOver = false;
        this.gridSize = 20;
        this.running = false;
    }

    start() {
        // Create game canvas
        const container = document.createElement('div');
        container.className = 'game-container';
        container.innerHTML = `
            <div class="game-header">
                <span class="game-title">🐍 SNAKE GAME</span>
                <span class="game-score">Score: <span id="snake-score">0</span></span>
                <button id="close-game" class="game-close">✕ ESC</button>
            </div>
            <canvas id="snake-canvas" width="400" height="400"></canvas>
            <div class="game-controls">
                Use Arrow Keys or WASD to move | ESC to quit
            </div>
        `;

        this.term.outputDiv.appendChild(container);
        this.term.scrollToBottom();

        this.canvas = document.getElementById('snake-canvas');
        this.ctx = this.canvas.getContext('2d');

        // Initialize game state
        this.reset();

        // Event listeners
        document.addEventListener('keydown', this.handleKey.bind(this));
        document.getElementById('close-game').onclick = () => this.stop();

        // Start game loop
        this.running = true;
        this.gameLoop();
    }

    reset() {
        this.snake = [
            { x: 10, y: 10 },
            { x: 9, y: 10 },
            { x: 8, y: 10 }
        ];
        this.direction = 'right';
        this.nextDirection = 'right';
        this.score = 0;
        this.gameOver = false;
        this.spawnFood();
    }

    handleKey(e) {
        if (!this.running) return;

        const key = e.key.toLowerCase();

        if (key === 'escape') {
            this.stop();
            return;
        }

        // Prevent reverse direction
        if ((key === 'arrowup' || key === 'w') && this.direction !== 'down') {
            this.nextDirection = 'up';
        } else if ((key === 'arrowdown' || key === 's') && this.direction !== 'up') {
            this.nextDirection = 'down';
        } else if ((key === 'arrowleft' || key === 'a') && this.direction !== 'right') {
            this.nextDirection = 'left';
        } else if ((key === 'arrowright' || key === 'd') && this.direction !== 'left') {
            this.nextDirection = 'right';
        }
    }

    spawnFood() {
        const gridW = this.canvas.width / this.gridSize;
        const gridH = this.canvas.height / this.gridSize;

        do {
            this.food = {
                x: Math.floor(Math.random() * gridW),
                y: Math.floor(Math.random() * gridH)
            };
        } while (this.snake.some(seg => seg.x === this.food.x && seg.y === this.food.y));
    }

    update() {
        if (this.gameOver) return;

        this.direction = this.nextDirection;

        // Move snake
        const head = { ...this.snake[0] };

        if (this.direction === 'up') head.y--;
        if (this.direction === 'down') head.y++;
        if (this.direction === 'left') head.x--;
        if (this.direction === 'right') head.x++;

        // Check wall collision
        const gridW = this.canvas.width / this.gridSize;
        const gridH = this.canvas.height / this.gridSize;

        if (head.x < 0 || head.x >= gridW || head.y < 0 || head.y >= gridH) {
            this.gameOver = true;
            this.term.log(`Game Over! Final Score: ${this.score}`, 'error');
            return;
        }

        // Check self collision
        if (this.snake.some(seg => seg.x === head.x && seg.y === head.y)) {
            this.gameOver = true;
            this.term.log(`Game Over! Final Score: ${this.score}`, 'error');
            return;
        }

        this.snake.unshift(head);

        // Check food collision
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score++;
            document.getElementById('snake-score').textContent = this.score;
            this.spawnFood();
        } else {
            this.snake.pop();
        }
    }

    draw() {
        // Background
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Grid
        this.ctx.strokeStyle = '#111';
        for (let x = 0; x < this.canvas.width; x += this.gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }
        for (let y = 0; y < this.canvas.height; y += this.gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }

        // Snake
        this.snake.forEach((seg, i) => {
            this.ctx.fillStyle = i === 0 ? '#00ff00' : '#33ff33';
            this.ctx.fillRect(
                seg.x * this.gridSize + 1,
                seg.y * this.gridSize + 1,
                this.gridSize - 2,
                this.gridSize - 2
            );

            // Glow effect on head
            if (i === 0) {
                this.ctx.shadowBlur = 10;
                this.ctx.shadowColor = '#00ff00';
            } else {
                this.ctx.shadowBlur = 0;
            }
        });

        // Food
        this.ctx.fillStyle = '#ff0000';
        this.ctx.shadowBlur = 15;
        this.ctx.shadowColor = '#ff0000';
        this.ctx.fillRect(
            this.food.x * this.gridSize + 1,
            this.food.y * this.gridSize + 1,
            this.gridSize - 2,
            this.gridSize - 2
        );
        this.ctx.shadowBlur = 0;
    }

    gameLoop() {
        if (!this.running) return;

        this.update();
        this.draw();

        setTimeout(() => {
            requestAnimationFrame(() => this.gameLoop());
        }, 100);
    }

    stop() {
        this.running = false;
        this.term.log(`Snake game closed. Final score: ${this.score}`, 'info');
    }
}

// Add CSS for games
const gameStyles = `
.game-container {
    border: 2px solid #33ff00;
    background: #0a0a0a;
    padding: 15px;
    margin: 20px 0;
    box-shadow: 0 0 30px rgba(51, 255, 0, 0.3);
}

.game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #333;
}

.game-title {
    color: #ffcc00;
    font-weight: bold;
    font-size: 1.1rem;
}

.game-score {
    color: #00ccff;
}

.game-close {
    background: rgba(255, 51, 51, 0.2);
    border: 1px solid #ff3333;
    color: #ff3333;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Fira Code', monospace;
    transition: all 0.2s;
}

.game-close:hover {
    background: rgba(255, 51, 51, 0.4);
    box-shadow: 0 0 10px rgba(255, 51, 51, 0.5);
}

.game-controls {
    text-align: center;
    color: #888;
    margin-top: 10px;
    font-size: 0.85rem;
}

#snake-canvas {
    display: block;
    margin: 0 auto;
    border: 1px solid #333;
}
`;

// Inject styles
if (!document.getElementById('game-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'game-styles';
    styleSheet.textContent = gameStyles;
    document.head.appendChild(styleSheet);
}
