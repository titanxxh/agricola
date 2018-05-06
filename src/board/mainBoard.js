import React from 'react';
import * as game from '../game';
import { PlayerBoard } from './playerBoard';
import * as cs from '../constants';

export class MainBoard extends React.Component {
  onClick(index) {
    if (this.isOccupied(index)) {
      this.props.moves.clickCell(index);
      // todo not end turn
      this.props.events.endTurn();
    }
  }

  isOccupied(index) {
    return game.isActionCellUnoccupied(this.props.G.actionCells, index);
  }

  render() {
    let tbody = [];
    for (let i = 0; i < cs.maxBoardHeight; i++) {
      let cells = [];
      for (let j = 0; j < cs.maxBoardLength; j++) {
        const index = cs.maxBoardLength * i + j;
        cells.push(
          <td
            key={index}
            className={
              'action ' +
              (this.isOccupied(index)
                ? 'active'
                : cs.playerColor[this.props.G.actionCells[index].occupied])
            }
            onClick={() => this.onClick(index)}
          >
            {`${cs.mainActionTitle[i][j]} ${
              this.props.G.actionCells[index].occupied
            }`}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <div className={'case ' + cs.playerColor[this.props.ctx.currentPlayer]}>
        <div>Main Board</div>
        <div>
          <table id="mainBoard">
            <tbody>{tbody}</tbody>
          </table>
        </div>
        <PlayerBoard {...this.props} playerId={0} />
        <PlayerBoard {...this.props} playerId={1} />
        <PlayerBoard {...this.props} playerId={2} />
        <PlayerBoard {...this.props} playerId={3} />
      </div>
    );
  }
}
