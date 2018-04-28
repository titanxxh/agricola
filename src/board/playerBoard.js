import React from 'react';
import * as game from '../game'

const playerBoardHeight = 7;
const playerBoardLength = 11;

const idToAccor = function (id) {
    return {
        x: Math.floor(id / playerBoardLength),
        y: id % playerBoardLength,
    }
};

export function PlayerBoard(playerId) {
    return class WrappedPlayerBoard extends React.Component {
        constructor(props) {
            super(props);
            this.boardInfo = {...props, playerId};
        }

        onClick(id) {
            alert(JSON.stringify(idToAccor(id)));
        }

        render() {
            let tbody = [];
            for (let i = 0; i < playerBoardHeight; i++) {
                let cells = [];
                for (let j = 0; j < playerBoardLength; j++) {
                    const id = playerBoardLength * i + j;
                    cells.push(
                        <td key={id}
                            className={game.playerColor[this.boardInfo.playerId]}
                            onClick={() => this.onClick(id)}>
                            {`${i},${j}`}
                        </td>
                    );
                }
                tbody.push(<tr key={i}>{cells}</tr>);
            }

            return (
                <div>
                    <table id="board">
                        <tbody>{tbody}</tbody>
                    </table>
                </div>
            );
        }
    };
}