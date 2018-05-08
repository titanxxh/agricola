import { Agricola } from '../game';
import { setting } from './setting';
import * as cs from '../constants';

test('setting phase', () => {
  const numPlayers = 4;
  let G = Agricola.setup();
  let ctx = {
    ...Agricola.flow.ctx(numPlayers),
    random: {
      Number: Math.random,
      Shuffle: arr => cs.shuffleArray(arr, Math.random),
    },
  };
  console.log(G);
  console.log(ctx);
  console.log('before setting');
  // check player position is in random order
  console.log('players', G.playersInfo);
  // check round seq is generate
  console.log('round seq', G.secret.roundSeq);
  G = setting.onPhaseBegin(G, ctx);
  console.log('after setting');
  // check player position is in random order
  console.log('players', G.playersInfo);
  // check round seq is generate
  console.log('round seq', G.secret.roundSeq);
});
