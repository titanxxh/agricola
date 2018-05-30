export function round(i) {
  const log = function(x) {
    console.log('Round' + i + ': ', x);
  };

  return {
    name: 'Round' + i,

    allowedMoves: (G, ctx) => ['confirmMoves', 'doMainAction'],

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
      log('starting');
      let r = { ...G };
      r.currentRound = i;
      r.startingPlayerToken = G.nextStartingPlayerToken;
      r.mainActions.forEach((v, i) => {
        v.onTurnBegin();
      });
      r.playersInfo.forEach((v, i) => {
        v.movesConfirmed = false;
        v.public.farm.newborn = 0;
      });
      return r;
    },

    endPhaseIf: (G, ctx) => {
      const allPlayersMemberUsed =
        G.playersInfo.reduce((acc, x) => acc && !x.hasAvailableMembers(), true) && G.doCurrentPlayerConfirmed(G, ctx);
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
