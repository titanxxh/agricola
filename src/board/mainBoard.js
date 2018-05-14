import React from 'react';
import { PlayerBoard } from './playerBoard';
import * as cs from '../constants';
import { ButtonGroup, Button } from 'reactstrap';
import * as game from '../game';

export class MainBoard extends React.Component {
  onClickMainAction(i) {
    if (!this.isActive()) return;
    const title = this.props.G.actionCells[i];
    const action = this.props.G.mainActions.get(title);
    console.log('onclick', i, title, action);
    if (action.canChooseByPlayer(this.props.ctx.currentPlayer)) {
      this.props.moves.clickCell(title);
      this.props.events.endTurn();
    }
  }

  onClickUndoButton() {
    if (!this.isActive()) return;
    console.log('undo');
    this.props.undo();
  }

  onClickRedoButton() {
    if (!this.isActive()) return;
    console.log('redo');
    this.props.redo();
  }

  onClickConfirmButton() {
    if (!this.isActive()) return;
    console.log('confirm');
    // todo not end turn
    this.props.events.endTurn();
  }

  onClickDraftButton() {
    if (!this.isActive()) return;
    console.log('draft');
    this.props.moves.draft();
    this.props.events.endTurn();
  }

  onClickResetButton() {
    console.log('reset');
    this.props.reset();
  }

  isActive() {
    return this.props.isActive;
  }

  render() {
    const clientId = +this.props.playerID;
    const currentPlayerId = +this.props.ctx.currentPlayer;
    console.log(`client ${clientId} current ${currentPlayerId} ${clientId === currentPlayerId}`);

    let tbody = [];
    if (this.props.G.currentRound > 0) {
      let i = 0;
      let cells = [];
      let row = 0;
      console.log(this.props);
      while (i < this.props.G.actionCells.length) {
        const index = i;
        const title = this.props.G.actionCells[index];
        const action = this.props.G.mainActions.get(title);
        let td = null;
        if (action !== undefined) {
          //console.log(action, 'on', i);
          const round = action.round;
          if (round === undefined) {
            td = (
              <td
                key={index}
                className={`action ${action.canChooseByPlayer(currentPlayerId) ? 'active' : ''}`}
                onClick={() => this.onClickMainAction(index)}
              >
                <p>{action.title()}</p>
                <p>{`(${action.detail()})`}</p>
                <p>{action.show()}</p>
                <p>{action.occupiedBy().reduce((acc, x) => acc + cs.playerColor[x], '')}</p>
              </td>
            );
          } else {
            if (action.visible(this.props.G)) {
              td = (
                <td
                  key={index}
                  className={`action ${action.canChooseByPlayer(currentPlayerId) ? 'active' : ''}`}
                  onClick={() => this.onClickMainAction(index)}
                >
                  <p>{`Round${round}`}</p>
                  <p>{action.title()}</p>
                  <p>{`(${action.detail()})`}</p>
                  <p>{action.show()}</p>
                  <p>{action.occupiedBy().reduce((acc, x) => acc + cs.playerColor[x], '')}</p>
                </td>
              );
            } else {
              td = (
                <td key={index} className={`action`}>
                  <p>{`Round${round}`}</p>
                </td>
              );
            }
          }
        }
        cells.push(td);
        i++;
        if (i % cs.maxBoardLength === 0) {
          tbody.push(<tr key={row}>{cells}</tr>);
          cells = [];
          row++;
        }
      }
    } else {
      tbody = (
        <tr>
          <td>Not showing main board in setting phase!</td>
        </tr>
      );
    }

    return (
      <div className={cs.playerColor[clientId]}>
        <div>
          Main Board,{' '}
          {`${clientId === currentPlayerId ? 'You' : `Player ${cs.playerColor[currentPlayerId]}`} Should Move.`}
        </div>
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
