const Asteroid = require('./asteroid');

Game.DIM_X = 900;
Game.DIM_Y = 700;
Game.NUM_ASTEROIDS = 25;

function Game() {
    this.asteroids = [];
    this.addAsteroids();
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

    for(let i = 0; i < this.asteroids.length; i++){
        this.asteroids[i].draw(ctx);
    };
};

Game.prototype.moveObjects = function() {
    
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
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
}

module.exports = Game;