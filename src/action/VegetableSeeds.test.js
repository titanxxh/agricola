import { initPlayer } from '../player';
import { VegetableSeeds } from './VegetableSeeds';

test('vege seed is taken', () => {
  let a = new VegetableSeeds({ round: 9 });
  let G = { playersInfo: [initPlayer(0)] };
  a.executeByPlayer(G, 0);
  expect(G.playersInfo[0].public.resources.vegetable).toBe(1);
  a.executeByPlayer(G, 0);
  expect(G.playersInfo[0].public.resources.vegetable).toBe(2);
});
