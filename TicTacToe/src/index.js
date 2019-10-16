const View = require('./ttt-view');
const Game = require('./game.js');

  $(() => {
    let $el = $('.ttt');
    let game = new Game();
    let view = new View(game, $el);
  });
