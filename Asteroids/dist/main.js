/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nconst DEFAULTS = {\n    COLOR: '#750080',\n    RADIUS: 20,\n    SPEED: 10\n}\n\nfunction Asteroid(options){\n    options = options || {};\n    \n    options.pos = options.pos || options.game.randomPosition();\n    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);\n    options.radius = DEFAULTS.RADIUS;\n    options.color = DEFAULTS.COLOR;\n\n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nGame.DIM_X = 900;\nGame.DIM_Y = 700;\nGame.NUM_ASTEROIDS = 10;\n\nfunction Game() {\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ship = new Ship({ pos: this.randomPosition(), game: this});\n};\n\nGame.prototype.addAsteroids = function() {\n    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid({ game: this }))\n    };\n}\n\nGame.prototype.randomPosition = function() {\n    return [\n        Game.DIM_X * Math.random(),\n        Game.DIM_Y * Math.random()\n    ];\n};\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n    for(let i = 0; i < this.asteroids.length; i++){\n        this.asteroids[i].draw(ctx);\n    };\n};\n\nGame.prototype.moveObjects = function() {\n    \n    for (let i = 0; i < this.asteroids.length; i++) {\n        this.asteroids[i].move();\n    };\n}\n\nGame.prototype.wrap = function(pos) {\n    if (pos[0] >= Game.DIM_X) {\n        pos[0] = 0;\n    } else if (pos[0] <= 0) {\n        pos[0] = Game.DIM_X;\n    }\n\n    if (pos[1] >= Game.DIM_Y) {\n        pos[1] = 0;\n    } else if (pos[1] <= 0) {\n        pos[1] = Game.DIM_Y;\n    }\n\n    return pos;\n};\n\nGame.prototype.checkCollisions = function() {\n    // debugger\n    for(let i = 0; i < this.asteroids.length; i++) {\n        for(let j = 0; j < this.asteroids.length; j++) {\n            if(i !== j) {\n                const obj1 = this.asteroids[i];\n                const obj2 = this.asteroids[j];\n\n                if(obj1.isCollidedWith(obj2)) {\n                    // alert('COLLISION');\n                    obj1.collideWith(obj2);\n                }\n            }\n        }\n    }\n};\n\nGame.prototype.step = function() {\n    this.moveObjects();\n    this.checkCollisions();\n};\n\nGame.prototype.remove = function(asteroid) {\n    let asteroidIdx = this.asteroids.indexOf(asteroid);\n    this.asteroids.splice(asteroidIdx, 1);\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n    let that = this;\n    setInterval(function(){\n        that.game.step();\n        that.game.draw(that.ctx);\n        // testing:\n        // that.game.checkCollisions(); \n    }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log('webpack is working');\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    let canvas = document.getElementById('game-canvas');\n    let ctx = canvas.getContext('2d');\n\n    let game = new Game();\n    let gameView = new GameView(game, ctx);\n    gameView.start();\n    \n    window.MovingObject = MovingObject;\n    window.move = MovingObject.move;\n    window.draw = MovingObject.draw;\n    window.canvas = canvas;\n    window.ctx = ctx;\n    window.Asteroid = Asteroid;\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options){\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n};\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.fillStyle = this.color;\n\n    ctx.beginPath();\n\n    ctx.arc(\n        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n        // x, y, radius, starting angle, ending angle, counter clockwise\n    );\n\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function(){\n    this.pos = this.game.wrap(this.pos);\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n    let pos1 = this.pos;\n    let pos2 = otherObject.pos;\n    let centerDist = Math.sqrt(\n        Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n    return centerDist < (this.radius + otherObject.radius);\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n    this.game.remove(otherObject);\n    this.game.remove(this);\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });