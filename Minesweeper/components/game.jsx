import React from 'react';

import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Minesweeper.Board(5, 5),
            cheating: false
        }

        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    componentDidMount() {
        let that = this;
        window.addEventListener('keydown', (e) => {
            // console.log(e);
            if(e.key === 'Meta') {
                that.setState({ cheating: true })
            }
        })

        window.addEventListener('keyup', () => {
            that.setState({ cheating: false })
        })
    }
    updateGame(tile, flagging) {
        if (flagging) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({ board: this.state.board })
    }

    restartGame(e) {
        // console.log(this)
        const newBoard = new Minesweeper.Board(5,5);
        this.setState({ board: newBoard });
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
                        {status}
                        <br />
                        {lost}{win}
                        <br />
                        <button className="redo" onClick={this.restartGame}>Play again</button>
                    </div>
                </div>
        }
        return (
            <div>
                <h1>MINESWEEEPPPEEERR</h1>
                {modal}
                <Board board={this.state.board} updateGame={this.updateGame} cheating={this.state.cheating}/>
            </div>
        )
    }
}

export default Game;