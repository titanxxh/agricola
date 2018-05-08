import * as cs from '../constants';
import { initPlayer } from '../player';

export function round(i) {
  return {
    name: 'Round' + i,

    turnOrder: {
      first: (G, ctx) => G.startingPlayerToken,
      next: (G, ctx) => G.playersInfo[(+ctx.playOrderPos + 1) % ctx.playOrder.length].id,
    },

    endPhaseIf: (G, ctx) => {
      const allPlayersMemberUsed = G.playersInfo.reduce((acc, x) => acc && !x.hasAvailableMembers(), true);
      if (allPlayersMemberUsed) {
        console.log('allPlayersMemberUsed next round starting player ', G.nextStartingPlayerToken);
        return G.nextStartingPlayerToken;
      } else {
        return false;
      }
    },

    // Run at the beginning of a phase.
    onPhaseBegin: (G, ctx) => {
      let r = { ...G };
      console.log('Round' + i, 'starting');
      r.startingPlayerToken = G.nextStartingPlayerToken;
      return r;
    },

    onPhaseEnd: (G, ctx) => {
      return G;
    },
  };
}
