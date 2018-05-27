import React from 'react';
import * as cs from '../constants';
import './playerBoard.css';
import { ResourcesBoard } from './resourcesBoard';

const playerBoardHeight = 7;
const playerBoardLength = 11;

const indexToAccor = function(index) {
  return {
    x: Math.floor(index / playerBoardLength),
    y: index % playerBoardLength,
  };
};

const indexToType = function(index) {
  const pos = indexToAccor(index);
  if (pos.x % 2 === 0 && pos.y % 2 === 0) {
    return 'none';
  } else if (pos.x % 2 === 1 && pos.y % 2 === 0) {
    return 'fenceV';
  } else if (pos.x % 2 === 1 && pos.y % 2 === 1) {
    return 'farm';
  } else {
    return 'fenceH';
  }
};

export class PlayerBoard extends React.Component {
  onClick(id) {
    alert(JSON.stringify(indexToAccor(id)));
  }

  render() {
    const pId = this.props.G.sittingOrder[this.props.turnOrderId];
    const player = this.props.G.playersInfo[pId];
    const farmBoard = player.public.farm.board;

    let cells = [];
    if (this.props.G.currentRound > 0) {
      for (let j = 0; j < playerBoardHeight; j++) {
        for (let i = 0; i < playerBoardLength; i++) {
          const index = playerBoardLength * j + i;
          const type = indexToType(index);
          let show = '';
          if (type === 'fenceV' || type === 'fenceH') {
            show = farmBoard.hasFence(i, j) ? 'F' : '';
          } else if (type === 'farm') {
            show = farmBoard.getLand(Math.floor(i / 2), Math.floor(j / 2)).grid;
          }
          cells.push(
            <div key={index} className={'farmBoard ' + type} onClick={() => this.onClick(index)}>
              {show}
            </div>
          );
        }
      }
    }

    return (
      <div className={cs.playerColor[pId]}>
        <div>
          Player {cs.playerColor[pId]} Board, {this.props.G.startingPlayerToken === pId ? 'Starter Player' : ''}
        </div>
        <div className="playerBoard">{cells}</div>
        <ResourcesBoard player={this.props.G.playersInfo[pId]} />
      </div>
    );
  }
}
