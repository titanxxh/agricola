import { Copse } from './Copse';
import { initPlayer } from '../player';

test('copse acc wood', () => {
  let a = new Copse();
  expect(a.acc).toBe(0);
  a.onTurnBegin();
  expect(a.acc).toBe(1);
});

test('copse wood is taken', () => {
  let a = new Copse();
  a.acc = 1;
  let G = { playersInfo: [initPlayer(0)] };
  a.executeByPlayer(G, 0);
  expect(G.playersInfo[0].public.resources.wood).toBe(1);
  a.executeByPlayer(G, 0);
  expect(G.playersInfo[0].public.resources.wood).toBe(1);
});
