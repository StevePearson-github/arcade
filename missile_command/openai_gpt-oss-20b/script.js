// Simple Missile Command clone
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Game state
let incomingMissiles = [];
let playerMissiles = [];
let score = 0;

// Sound elements
const explosionSound = document.getElementById('explosionSound');
const launchSound = document.getElementById('missileSound');

// Utility
function rand(min, max) { return Math.random() * (max - min) + min; }

function spawnIncoming() {
  // Spawn a missile from top to bottom at random x
  const m = {
    x: rand(0, width),
    y: -20,
    vx: 0,
    vy: rand(1, 2),
    radius: 10
  };
  incomingMissiles.push(m);
}

function update(dt) {
  // Update incoming missiles
  for (const m of incomingMissiles) {
    m.y += m.vy * dt;
  }
  // Update player missiles
  for (const m of playerMissiles) {
    m.y -= m.vy * dt;
  }

  // Collision detection
  for (let i = incomingMissiles.length - 1; i >= 0; i--) {
    const im = incomingMissiles[i];
    for (let j = playerMissiles.length - 1; j >= 0; j--) {
      const pm = playerMissiles[j];
      const dx = im.x - pm.x;
      const dy = im.y - pm.y;
      if (Math.hypot(dx, dy) < im.radius + pm.radius) {
        // Hit
        incomingMissiles.splice(i, 1);
        playerMissiles.splice(j, 1);
        score++;
        explosionSound.play();
        break;
      }
    }
  }

  // Remove off-screen missiles
  incomingMissiles = incomingMissiles.filter(m => m.y < height + 20);
  playerMissiles = playerMissiles.filter(m => m.y > -20);
}

function draw() {
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, width, height);

  // Draw incoming missiles
  ctx.fillStyle = 'red';
  for (const m of incomingMissiles) {
    ctx.beginPath();
    ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Draw player missiles
  ctx.fillStyle = 'yellow';
  for (const m of playerMissiles) {
    ctx.beginPath();
    ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Score
  ctx.fillStyle = 'white';
  ctx.font = '20px sans-serif';
  ctx.fillText('Score: ' + score, 10, 30);
}

let lastTime = performance.now();
function loop(now) {
  const dt = (now - lastTime) / 16.666; // normalize to ~60fps
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(loop);
}

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  // Fire missile towards click
  const dx = x - width / 2;
  const dy = y - height;
  const dist = Math.hypot(dx, dy);
  const speed = 5;
  const m = {
    x: width / 2,
    y: height,
    vx: (dx / dist) * speed,
    vy: (dy / dist) * speed,
    radius: 5
  };
  playerMissiles.push(m);
  launchSound.play();
});

// Game init
spawnIncoming();
setInterval(spawnIncoming, 2000);
requestAnimationFrame(loop);
