import { Game } from 'boardgame.io/core';
import * as cs from './constants';
import { setting } from './phase/setting';
import { round } from './phase/round';

export const Agricola = Game({
  setup: () => {
    let g = {
      currentRound: 0,
      sittingOrder: undefined,
      playersInfo: undefined,
      secret: {
        roundSeq: undefined,
      },
      mainActions: new Map(),
      actionCells: [],
    };
    cs.mainActionTitle.forEach((title, i) => {
      if (title.indexOf('Round') === 0) {
        return;
      }
      g.actionCells.push(title);
      g.mainActions.set(title, cs.mainActions[title]());
    });
    return g;
  },

  moves: {
    clickCell(G, ctx, title) {
      let r = { ...G };
      let action = r.mainActions.get(title);
      if (!action.canChooseByPlayer(ctx.currentPlayer)) {
        alert('invalid click');
        return;
      }
      action.occupied.push(ctx.currentPlayer);
      action.executeByPlayer(r, ctx.currentPlayer);
      return r;
    },

    draft(G, ctx) {
      // todo drafting cards
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
