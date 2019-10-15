const MovingObject = require('./moving_object');

Ship.RADIUS = 10;
Ship.COLOR = '#9494ff';

function Ship(options){
    options = options || {};

    options.color = Ship.COLOR;
    options.radius = Ship.RADIUS;
    options.vel = [0,0];
    
    MovingObject.call(this, options)
};

module.exports = Ship;