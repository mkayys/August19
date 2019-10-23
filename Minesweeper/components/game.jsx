import React from 'react';

import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Minesweeper.Board(5, 5)
        }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagging) {
        if (flagging) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({ board: this.state.board })
    }

    restartGame() {

    }

    render() {
        const lost = (this.state.board.lost() ? "you lost" : "");
        const win = (this.state.board.won() ? "you win": "");

        const status = ((this.state.board.lost() || this.state.board.won()) ? "GAME OVER": "");
        let modal;
        if (lost || win) {
            modal = 
                <div className="modal-bck">
                    <div className="modal-child">
                        {/* {lost}{win} */}
                        {status}
                    </div>
                </div>
        }
        return (
            <div>
                <h1>MINESWEEEPPPEEERR</h1>
                {modal}
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>
        )
    }
}

export default Game;