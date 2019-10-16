const MovingObject = require('./moving_object');

Ship.RADIUS = 10;
Ship.COLOR = '#9494ff';

function Ship(options){
    options = options || {};

    options.color = Ship.COLOR;
    options.radius = Ship.RADIUS;
    options.vel = [0,0];
    options.pos = options.pos;
    options.game = options.game;

    MovingObject.call(this, options)
};

Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
};

module.exports = Ship;