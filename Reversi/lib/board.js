let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  // const grid = [];

  // for(let i = 0; i < 8; i++) {
  //   let row = new Array(8);
  //   grid.push(row);
  // }

  const grid = Array.from(Array(8), () => new Array(8));

  grid[3][3] = new Piece("white");
  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[4][4] = new Piece("white");

  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if(!this.isValidPos(pos)) {
    throw new Error('invalid pos');
  }
  return this.grid[pos[0]][pos[1]];
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  if (this.validMoves(color).length !== 0) return true;
  return false;
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if (this.grid[pos[0]][pos[1]] === undefined) return false;
  if(this.grid[pos[0]][pos[1]].color === color) return true;
  return false;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if(this.grid[pos[0]][pos[1]] === undefined) return false;
  if(this.grid[pos[0]][pos[1]] instanceof Piece) return true;
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  if(!this.hasMove("white") || !this.hasMove("black")) return true;
  return false;
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if((pos[0] >= 0 && pos[1] >= 0) && (pos[0] < 8 && pos[1] < 8)) return true;
  return false;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip = []) {
  let nextPos = [pos[0] + dir[0], pos[1] + dir[1]];
  
  // if(!board.isValidPos(nextPos)) {
  //   return null;
  // } else if (!board.isOccupied(nextPos)) {
  //   return null;
  // } else if(board.isMine(nextPos, color)) {
  //   if (board.getPiece(pos) !== undefined) {
  //     piecesToFlip.push(board.getPiece(pos)); 
  //   }
  //   if (piecesToFlip.length === 0) {
  //     return null;
  //   } else {
  //     return piecesToFlip;
  //   }
  // } else {
  //   return _positionsToFlip(board, nextPos, color, dir, piecesToFlip)
  // }
  
  if (!board.isValidPos(nextPos)) return null;
  if (!board.isOccupied(nextPos)) return null;

  if (board.isMine(nextPos, color)) {
    if(board.getPiece(pos) !== undefined) piecesToFlip.push(board.getPiece(pos));
    if (piecesToFlip.length === 0) {
      return null;
    } else {
      return piecesToFlip;
    }
  }

  return _positionsToFlip(board, nextPos, color, dir, piecesToFlip);
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.validMove(pos, color)) throw new Error('invalid move');

  let piecesArr = [];

  for (let dirIdx = 0; dirIdx < Board.DIRS.length; dirIdx++) {
      piecesArr = piecesArr.concat(
        _positionsToFlip(this, pos, color, Board.DIRS[dirIdx]) || []
      )
  }
  for (let i = 0; i < piecesArr.length; i++) {
    piecesArr[i].flip();
  }
  this.grid[pos[0]][pos[1]] = new Piece(color);
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  for(let i = 0; i < this.length; i++) {

  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if(this.isOccupied(pos)) return false;

  for(let i = 0; i < Board.DIRS.length; i++) {
    if (_positionsToFlip(this, pos, color, Board.DIRS[i])) return true;
  }
  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let possibleMoves = [];

  for (let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      if (this.validMove([i,j], color)) possibleMoves.push([i, j]);
    }
  }

  return possibleMoves;
};

module.exports = Board;
