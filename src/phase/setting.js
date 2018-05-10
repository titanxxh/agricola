import * as cs from '../constants';
import { initPlayer } from '../player';

const log = function(x) {
  console.log('Setting: ', x);
};

export const setting = {
  name: 'Setting',

  allowedMoves: (G, ctx) => ['draft'],

  turnOrder: {
    first: (G, ctx) => G.startingPlayerToken,
    next: (G, ctx) => {
      const pos = G.sittingOrder.indexOf(+ctx.currentPlayer);
      const next = G.sittingOrder[(pos + 1) % ctx.numPlayers];
      log('next player is ' + next);
      return next;
    },
  },

  onTurnEnd: (G, ctx) => {
    log(`player ${ctx.currentPlayer} turn end`);
    return G;
  },

  // Run at the beginning of a phase.
  onPhaseBegin: (G, ctx) => {
    log('setting phase starting');
    let r = { ...G };
    const rand = Math.random; //ctx.random.Number
    r.secret.roundSeq = cs.getShuffledStageActions(rand);
    r.playersInfo = Array.from({ length: ctx.numPlayers }, (v, i) => initPlayer(i));
    r.sittingOrder = cs.shuffleArray(Array.from({ length: ctx.numPlayers }, (v, i) => i), rand);

    r.startingPlayerToken = r.sittingOrder[0];
    r.nextStartingPlayerToken = r.startingPlayerToken;
    r.playersInfo[r.startingPlayerToken].public.resources.food = 2;
    return r;
  },

  endPhaseIf: (G, ctx) => {
    const allPlayersDraftDone = G.playersInfo.reduce((acc, x) => acc && x.draftDone, true);
    if (allPlayersDraftDone) {
      log('all player draft done');
      return true;
    } else {
      return false;
    }
  },

  onPhaseEnd: (G, ctx) => {
    log('ending');
    return G;
  },
};
