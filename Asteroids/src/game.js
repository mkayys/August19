const Asteroid = require('./asteroid');

Game.DIM_X = 900;
Game.DIM_Y = 700;
Game.NUM_ASTEROIDS = 10;

function Game() {
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship({ pos: this.randomPosition(), game: this});
};

Game.prototype.addAsteroids = function() {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({ game: this }))
    };
}

Game.prototype.randomPosition = function() {
    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ];
};

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    // for(let i = 0; i < this.asteroids.length; i++){
    //     this.asteroids[i].draw(ctx);
    // };
    let allObjects = this.allObjects();
    for(let i = 0; i < allObjects.length; i++){
        allObjects[i].draw(ctx);
    };
};

Game.prototype.moveObjects = function() {
    
    // for (let i = 0; i < this.asteroids.length; i++) {
    //     this.asteroids[i].move();
    // };
    let allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
        allObjects[i].move();
    };
}

Game.prototype.wrap = function(pos) {
    if (pos[0] >= Game.DIM_X) {
        pos[0] = 0;
    } else if (pos[0] <= 0) {
        pos[0] = Game.DIM_X;
    }

    if (pos[1] >= Game.DIM_Y) {
        pos[1] = 0;
    } else if (pos[1] <= 0) {
        pos[1] = Game.DIM_Y;
    }

    return pos;
};

Game.prototype.checkCollisions = function() {
    let allObjects = this.allObjects();
    // debugger
    for(let i = 0; i < allObjects.length; i++) {
        for(let j = 0; j < allObjects.length; j++) {
            if(i !== j) {
                const obj1 = allObjects[i];
                const obj2 = allObjects[j];

                if(obj1.isCollidedWith(obj2)) {
                    // alert('COLLISION');
                    obj1.collideWith(obj2);
                }
            }
        }
    }
};

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
    let asteroidIdx = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(asteroidIdx, 1);
};

Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.ship);
};

module.exports = Game;