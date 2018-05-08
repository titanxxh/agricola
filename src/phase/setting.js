import * as cs from '../constants';
import { initPlayer } from '../player';

export const setting = {
  name: 'Setting',

  allowedMoves: (G, ctx) => [],

  // Run at the beginning of a phase.
  onPhaseBegin: (G, ctx) => {
    let r = { ...G };
    r.secret.roundSeq = cs.getShuffledStageActions(ctx.random.Number);
    console.log(r.secret.roundSeq);
    // todo shuffle player sitting order
    //r.playersInfo = ctx.random.Shuffle(Array.from({ length: ctx.numPlayers }, (v,i) => initPlayer(i)));
    r.playersInfo = Array.from({ length: ctx.numPlayers }, (v, i) => initPlayer(i));
    r.playersInfo[0].public.resources.food = 2;
    console.log(r.playersInfo);
    r.startingPlayerToken = r.playersInfo[0].id;
    r.nextStartingPlayerToken = r.startingPlayerToken;
    return r;
  },
};
