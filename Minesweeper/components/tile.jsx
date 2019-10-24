import React from 'react';

import * as Minesweeper from '../minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // console.log(e);
        // debugger
        const flagging = e.altKey ? true : false
        // console.log(flagging);
        this.props.updateGame(this.props.tile, flagging);
    }

    render() {
        const { tile, cheating } = this.props;
        let klass = "none";
        let text;
        if(cheating && tile.bombed) {
            text = "💣";
            klass = "bombed";
        }
        if (tile.explored) {
            if (tile.bombed) {
                text = "💣";
                klass = "bombed";
            } else {
                text = `${tile.adjacentBombCount()}`;
                klass = "revealed";
            }
        } else if (tile.flagged) {
            text = "🏁";
            klass = "flagged";
        }
        // if (tile.bombed) {
            
        // } else if (tile.flagged) {
            
        // } else if (tile.explored) {
            
        // }
        return (
            <div className='tile'>
                <div className={klass} onClick={this.handleClick}>{text}</div>
            </div>
        )
    }
}

export default Tile;