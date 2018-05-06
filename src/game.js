import { Game } from 'boardgame.io/core';
import { initPlayer } from './player';
import * as cs from './constants';

const isValidActionCellId = function(id) {
  return (
    cs.mainActionTitle[Math.floor(id / cs.maxBoardLength)][
      id % cs.maxBoardLength
    ] !== ''
  );
};

export const isActionCellUnoccupied = function(cells, id) {
  return cells[id].occupied === -1 && isValidActionCellId(id);
};

export const Agricola = Game({
  setup: () => {
    let g = {
      actionCells: Array.from(
        { length: cs.maxBoardLength * cs.maxBoardHeight },
        () => ({
          occupied: -1
        })
      ),
      playersInfo: Array.from({ length: cs.defaultPlayerNum }, i =>
        initPlayer(i)
      )
    };
    return g;
  },

  moves: {
    clickCell(G, ctx, id) {
      if (isActionCellUnoccupied(G.actionCells, id)) {
        const actionCells = [...G.actionCells];
        actionCells[id].occupied = ctx.currentPlayer;
        return { ...G, actionCells };
      }
      alert('invalid click');
    }
  },

  flow: {},

  playerView: (G, ctx, playerID) => {
    let r = { ...G };

    if (r.secret !== undefined) {
      delete r.secret;
    }

    for (let i = 0; i < cs.defaultPlayerNum; i++) {
      if (i !== playerID) {
        delete r.playersInfo[i].secret;
      }
    }

    return r;
  }
});
