import React from 'react';
import * as game from '../game'
import {PlayerBoard} from "./playerBoard";

const P0Board = PlayerBoard(0);

export class MainBoard extends React.Component {

    onClick(id) {
        if (this.isOccupied(id)) {
            this.props.moves.clickCell(id);
            // todo not end turn
            this.props.events.endTurn();
        }
    }

    isOccupied(id) {
        console.log(this.props);
        return game.isActionCellUnoccupied(this.props.G.actionCells, id)
    }

    render() {
        let tbody = [];
        for (let i = 0; i < game.maxBoardHeight; i++) {
            let cells = [];
            for (let j = 0; j < game.maxBoardLength; j++) {
                const id = game.maxBoardLength * i + j;
                cells.push(
                    <td key={id}
                        className={this.isOccupied(id) ? 'active' : game.playerColor[this.props.G.actionCells[id].occupied]}
                        onClick={() => this.onClick(id)}>
                        {`${game.mainActionTitle[i][j]} ${this.props.G.actionCells[id].occupied}`}
                    </td>
                );
            }
            tbody.push(<tr key={i}>{cells}</tr>);
        }

        return (
            <div>
                <table id="mainBoard">
                    <tbody>{tbody}</tbody>
                </table>
                <P0Board/>
            </div>
        );
    }
}