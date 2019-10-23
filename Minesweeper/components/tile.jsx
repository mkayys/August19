import React from 'react';

import * as Minesweeper from '../minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tile } = this.props;
        let klass;
        let text;
        if(tile.bombed) {
            text = "💣";
            klass = "bombed";
        } else if (tile.flagged) {
            text = "🏁";
            klass = "flagged";
        } else if (tile.explored) {
            text = `${tile.adjacentBombCount()}`;
            klass = "revealed";
        }
        return (
            <div className='tile'>
                <div className={klass}>{text}</div>
            </div>
        )
    }
}

export default Tile;