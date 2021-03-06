import * as cs from '../constants';
import { initPlayer } from '../player';

const log = function(x) {
  console.log('Setting: ', x);
};

export const setting = {
  name: 'Setting',

  allowedMoves: (G, ctx) => ['confirmMoves', 'draft'],

  turnOrder: {
    first: (G, ctx) => G.startingPlayerToken,
    next: (G, ctx) => {
      const pos = G.sittingOrder.indexOf(+ctx.currentPlayer);
      const next = G.sittingOrder[(pos + 1) % ctx.numPlayers];
      log('next player is ' + next);
      return next;
    },
  },

  onTurnBegin: (G, ctx) => {
    log(`player ${ctx.currentPlayer} turn begin`);
    let r = { ...G };
    let p = r.playersInfo[ctx.currentPlayer];
    p.movesConfirmed = false;
    return r;
  },

  onTurnEnd: (G, ctx) => {
    log(`player ${ctx.currentPlayer} turn end`);
    return G;
  },

  endTurnIf: (G, ctx) => {
    return G.doCurrentPlayerConfirmed(G, ctx);
  },

  // Run at the beginning of a phase.
  onPhaseBegin: (G, ctx) => {
    log('setting phase starting');
    let r = { ...G };
    const rand = Math.random; //ctx.random.Number

    r.secret.roundSeq = cs.getShuffledStageActions(rand);
    r.secret.roundSeq.forEach((v, i) => {
      const title = 'Round' + (i + 1);
      const builder = cs.mainActions[v];
      r.actionCells.push(title);
      r.mainActions.set(title, builder({ round: i + 1 }));
    });

    r.playersInfo = Array.from({ length: ctx.numPlayers }, (v, i) => initPlayer(i));
    // todo for test we fix sitting order
    r.sittingOrder = Array.from({ length: ctx.numPlayers }, (v, i) => i);
    //r.sittingOrder = cs.shuffleArray(Array.from({ length: ctx.numPlayers }, (v, i) => i), rand);

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
