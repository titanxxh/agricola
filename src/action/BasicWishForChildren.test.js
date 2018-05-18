import { BasicWishForChildren } from './BasicWishForChildren';
import { initPlayer } from '../player';

test('born a baby', () => {
  let a = new BasicWishForChildren({ round: 7 });
  let G = { playersInfo: [initPlayer(0)] };
  a.executeByPlayer(G, 0);
  const farm = G.playersInfo[0].public.farm;
  expect(farm.newborn).toBe(1);
  expect(farm.members).toBe(3);
  expect(farm.workingMembers).toEqual(['BasicWishForChildren', 'BasicWishForChildren']);
  expect(a.occupied).toEqual([0, 0]);
});
