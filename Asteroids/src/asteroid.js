const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

const DEFAULTS = {
    COLOR: '#750080',
    RADIUS: 20,
    SPEED: 10
}

function Asteroid(options){
    options = options || {};
    
    options.pos = options.pos || options.game.randomPosition();
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    options.radius = DEFAULTS.RADIUS;
    options.color = DEFAULTS.COLOR;

    MovingObject.call(this, options);
};

Asteroid.prototype.collideWith = function(otherObject) {
    if(otherObject instanceof Ship) {
        otherObject.relocate();
    }
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;