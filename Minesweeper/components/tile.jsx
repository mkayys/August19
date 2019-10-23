import React from 'react';

import * as Minesweeper from '../minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tile } = this.props;
        let text;
        if(tile.bombed) {
            text = "💣";
        } else if (tile.flagged) {
            text = "🏁";
        } else if (tile.explored) {
            text = `${tile.adjacentBombCount()}`;
        }
        return (
            <div>{text}</div>
        )
    }
}

export default Tile;