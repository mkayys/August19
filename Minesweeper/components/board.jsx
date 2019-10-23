import React from 'react';

import Tile from './tile';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="board-container">
                {this.props.board.grid.map((row, i) => {
                    return (
                        <div className="row" key={i}>
                            {row.map((tile, j) => {
                                return (
                                    <Tile key={j} tile={tile} updateGame={this.props.updateGame} />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Board;
