import { Game } from 'boardgame.io/core';
import * as cs from './constants';
import { setting } from './phase/setting';
import { round } from './phase/round';

const isValidActionCellId = function(id) {
  return cs.mainActionTitle[Math.floor(id / cs.maxBoardLength)][id % cs.maxBoardLength] !== '';
};

export const isActionCellUnoccupied = function(G, id) {
  return G.actionCells[id].occupied === -1 && isValidActionCellId(id);
};

export const Agricola = Game({
  setup: () => {
    let g = {
      sittingOrder: undefined,
      playersInfo: undefined,
      secret: {
        roundSeq: undefined,
      },
      actionCells: Array.from({ length: cs.maxBoardLength * cs.maxBoardHeight }, () => {
        return {
          occupied: -1,
        };
      }),
    };
    return g;
  },

  moves: {
    clickCell(G, ctx, id) {
      if (isActionCellUnoccupied(G, id)) {
        const actionCells = [...G.actionCells];
        actionCells[id].occupied = ctx.currentPlayer;
        return { ...G, actionCells };
      }
      alert('invalid click');
    },

    draft(G, ctx) {
      // todo
      // now we use it to get player ready
      let playersInfo = [...G.playersInfo];
      playersInfo[ctx.currentPlayer].draftDone = true;
      return { ...G, playersInfo };
    },
  },

  flow: {
    phases: [setting, round(1)],
  },

  playerView: (G, ctx, playerID) => {
    let r = { ...G };

    if (r.secret !== undefined) {
      delete r.secret;
    }

    for (let i = 0; i < ctx.numPlayers; i++) {
      if (r.playersInfo[i].id !== playerID) {
        delete r.playersInfo[i].secret;
      }
    }

    return r;
  },
});
