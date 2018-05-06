import React from 'react';
import * as cs from '../constants';
import './playerBoard.css';
import { ResourcesBoard } from './resourcesBoard';

const playerBoardHeight = 7;
const playerBoardLength = 11;

const indexToAccor = function(index) {
  return {
    x: Math.floor(index / playerBoardLength),
    y: index % playerBoardLength
  };
};

const indexToType = function(index) {
  const pos = indexToAccor(index);
  if (pos.x % 2 === 0 && pos.y % 2 === 0) {
    return 'none';
  } else if (pos.x % 2 === 1 && pos.y % 2 === 0) {
    return 'fenceH';
  } else if (pos.x % 2 === 1 && pos.y % 2 === 1) {
    return 'farm';
  } else {
    return 'fenceV';
  }
};

export class PlayerBoard extends React.Component {
  constructor(props) {
    super(props);
    console.log('playerboard' + JSON.stringify(props));
  }

  onClick(id) {
    alert(JSON.stringify(indexToAccor(id)));
  }

  render() {
    const id = this.props.playerId;

    let tbody = [];
    for (let i = 0; i < playerBoardHeight; i++) {
      let cells = [];
      for (let j = 0; j < playerBoardLength; j++) {
        const index = playerBoardLength * i + j;
        cells.push(
          <td
            key={index}
            className={'player ' + indexToType(index)}
            onClick={() => this.onClick(index)}
          >
            {/*{indexToType(index)}*/}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <div className={cs.playerColor[id]}>
        <div>Player {id} Board</div>
        <div>
          <table id="playerBoard">
            <tbody>{tbody}</tbody>
          </table>
        </div>
        <ResourcesBoard player={this.props.G.playersInfo[id]} />
      </div>
    );
  }
}
