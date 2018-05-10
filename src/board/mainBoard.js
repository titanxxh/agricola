import React from 'react';
import { PlayerBoard } from './playerBoard';
import * as cs from '../constants';
import { ButtonGroup, Button } from 'reactstrap';
import * as game from '../game';

export class MainBoard extends React.Component {
  onClickMainAction(index) {
    if (!this.isActive()) return;
    if (this.isUnoccupied(index)) {
      this.props.moves.clickCell(index);
      this.props.events.endTurn();
    }
  }

  onClickUndoButton() {
    console.log('undo');
    this.props.undo();
  }

  onClickRedoButton() {
    console.log('redo');
    this.props.redo();
  }

  onClickConfirmButton() {
    console.log('confirm');
    // todo not end turn
    this.props.events.endTurn();
  }

  onClickDraftButton() {
    console.log('draft');
    this.props.moves.draft();
    this.props.events.endTurn();
  }

  onClickResetButton() {
    console.log('reset');
    this.props.reset();
  }

  isUnoccupied(index) {
    return game.isActionCellUnoccupied(this.props.G, index);
  }

  isActive() {
    return this.props.isActive;
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
              (this.isUnoccupied(index) ? 'active' : cs.playerColor[this.props.G.actionCells[index].occupied])
            }
            onClick={() => this.onClickMainAction(index)}
          >
            {`${cs.mainActionTitle[i][j]} ${this.props.G.actionCells[index].occupied}`}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    const currentPlayerId = this.props.ctx.currentPlayer;

    return (
      <div className={cs.playerColor[currentPlayerId]}>
        <div>Main Board, Player {currentPlayerId} Should Move.</div>
        <div>
          <ButtonGroup>
            <Button onClick={() => this.onClickUndoButton()}>Undo</Button>
            <Button onClick={() => this.onClickRedoButton()}>Redo</Button>
            <Button onClick={() => this.onClickConfirmButton()}>Confirm</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button onClick={() => this.onClickDraftButton()}>Draft</Button>
            <Button onClick={() => this.onClickResetButton()}>Reset</Button>
          </ButtonGroup>
        </div>
        <div>
          <table id="mainBoard">
            <tbody>{tbody}</tbody>
          </table>
        </div>
        <PlayerBoard {...this.props} turnOrderId={0} />
        <PlayerBoard {...this.props} turnOrderId={1} />
        <PlayerBoard {...this.props} turnOrderId={2} />
        <PlayerBoard {...this.props} turnOrderId={3} />
      </div>
    );
  }
}
