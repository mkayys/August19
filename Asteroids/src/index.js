console.log('webpack is working');
const MovingObject = require('./moving_object');


document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById('game-canvas');
    let ctx = canvas.getContext('2d');

    window.MovingObject = MovingObject;
    window.move = MovingObject.move;
    window.draw = MovingObject.draw;
    window.canvas = canvas;
    window.ctx = ctx;
})