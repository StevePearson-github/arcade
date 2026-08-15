const assert = require('assert');

// Mocking the Missile class for logic testing
class Missile {
    constructor(startX, startY, targetX, targetY, speed = 1.5) {
        this.x = startX;
        this.y = startY;
        this.targetX = targetX;
        this.targetY = targetY;
        const angle = Math.atan2(targetY - startY, targetX - startX);
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.exploded = false;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        const dist = Math.hypot(this.targetX - this.x, this.targetY - this.y);
        if (dist < 5) {
            this.exploded = true;
        }
    }
}

function testMissileMovement() {
    const m = new Missile(0, 0, 100, 100, 10);
    m.update();
    assert(m.x > 0 && m.y > 0, "Missile should move towards target");
    console.log("testMissileMovement passed");
}

function testExplosionTrigger() {
    const m = new Missile(0, 0, 10, 10, 5);
    // Move it close to target
    m.x = 9; m.y = 9;
    m.update();
    assert(m.exploded === true, "Missile should explode near target");
    console.log("testExplosionTrigger passed");
}

try {
    testMissileMovement();
    testExplosionTrigger();
    console.log("All logic tests passed!");
} catch (e) {
    console.error("Test failed:", e.message);
    process.exit(1);
}
