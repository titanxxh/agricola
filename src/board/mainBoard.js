import React from 'react';
import { PlayerBoard } from './playerBoard';
import * as cs from '../constants';
import { ButtonGroup, Button, UncontrolledTooltip } from 'reactstrap';

export class MainBoard extends React.Component {
  onClickMainAction(i) {
    if (!this.isActive()) return;
    const title = this.props.G.actionCells[i];
    const action = this.props.G.mainActions.get(title);
    console.log('onclick', i, title, action);
    if (action.canChooseByPlayer(this.props.ctx.currentPlayer)) {
      this.props.moves.doMainAction(title);
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
    this.props.moves.confirmMoves();
  }

  onClickDraftButton() {
    if (!this.isActive()) return;
    console.log('draft');
    this.props.moves.draft();
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

    const occGradient = occList => {
      const l = occList.length;
      if (l === 0) {
        return 'white';
      }
      const per = Math.floor(100 / l);
      let grad = 'linear-gradient(to right, ';
      for (let i = 0; i < l; i++) {
        const v = occList[i];
        if (i < l - 1) {
          grad += `${cs.playerColor[v]} ${per * i}%, ${cs.playerColor[v]} ${per * (i + 1)}%, `;
        } else {
          grad += `${cs.playerColor[v]} ${per * i}%, ${cs.playerColor[v]} 100%)`;
        }
      }
      return grad;
    };

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
        const tooltipId = 'Tooltip-Action-' + index;
        let td = null;
        const actionStyle = {
          width: '100%',
        };
        const occupiedStyle = {
          width: '100%',
          height: '20px',
          background: `${occGradient(action.occupiedBy())}`,
        };
        const round = action.round;
        if (round === undefined) {
          td = (
            <td
              key={index}
              className={`action ${action.canChooseByPlayer(currentPlayerId) ? 'active' : ''}`}
              onClick={() => this.onClickMainAction(index)}
            >
              <div style={actionStyle}>
                <p id={tooltipId}>{action.title()}</p>
                <p>{action.show()}</p>
                <UncontrolledTooltip placement="right" target={tooltipId}>
                  <p>{`(${action.detail()})`}</p>
                  <p>{action.occupiedBy().reduce((acc, x) => acc + cs.playerColor[x], '')}</p>
                </UncontrolledTooltip>
              </div>
              <div style={occupiedStyle} />
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
                <div style={actionStyle}>
                  <p id={tooltipId}>{action.title()}</p>
                  <p>{action.show()}</p>
                  <UncontrolledTooltip placement="right" target={tooltipId}>
                    <p>{`Round${round}`}</p>
                    <p>{`(${action.detail()})`}</p>
                    <p>{action.occupiedBy().reduce((acc, x) => acc + cs.playerColor[x], '')}</p>
                  </UncontrolledTooltip>
                </div>
                <div style={occupiedStyle} />
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
