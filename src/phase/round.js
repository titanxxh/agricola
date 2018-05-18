export function round(i) {
  const log = function(x) {
    console.log('Round' + i + ': ', x);
  };

  return {
    name: 'Round' + i,

    turnOrder: {
      first: (G, ctx) => {
        log('first player is ' + G.startingPlayerToken);
        return G.startingPlayerToken;
      },
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
      log('starting');
      let r = { ...G };
      r.currentRound = i;
      r.startingPlayerToken = G.nextStartingPlayerToken;
      r.mainActions.forEach((v, i) => {
        v.onTurnBegin();
      });
      r.playersInfo.forEach((v, i) => {
        v.public.farm.newborn = 0;
      });
      return r;
    },

    endPhaseIf: (G, ctx) => {
      const allPlayersMemberUsed = G.playersInfo.reduce((acc, x) => acc && !x.hasAvailableMembers(), true);
      if (allPlayersMemberUsed) {
        log('allPlayersMemberUsed');
        log(`next round starting player ${G.nextStartingPlayerToken}`);
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
}
