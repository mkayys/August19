console.log('webpack is working');
const MovingObject = require('./moving_object');
const Asteroid = require('./asteroid');
const Game = require('./game');
const GameView = require('./game_view');


document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById('game-canvas');
    let ctx = canvas.getContext('2d');

    let game = new Game();
    let gameView = new GameView(game, ctx);
    // gameView.start();

    // window.Game = Game;

    window.MovingObject = MovingObject;
    window.move = MovingObject.move;
    window.draw = MovingObject.draw;
    window.canvas = canvas;
    window.ctx = ctx;
    window.Asteroid = Asteroid;
})