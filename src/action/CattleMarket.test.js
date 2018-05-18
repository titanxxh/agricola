import { CattleMarket } from './CattleMarket';
import { initPlayer } from '../player';

test('cattle market show', () => {
  let a = new CattleMarket({ round: 9 });
  expect(a.detail()).toBe('1 cattle >');
  a.onTurnBegin();
  a.onTurnBegin();
  expect(a.show()).toBe('2 cattle');
});

test('cattle market acc cattle', () => {
  let a = new CattleMarket({ round: 9 });
  expect(a.acc).toBe(0);
  a.onTurnBegin();
  expect(a.acc).toBe(1);
});

test('cattle market cattle is taken', () => {
  let a = new CattleMarket({ round: 9 });
  a.acc = 1;
  let G = { playersInfo: [initPlayer(0)] };
  a.executeByPlayer(G, 0);
  expect(G.playersInfo[0].public.resources.cattle).toBe(1);
  a.executeByPlayer(G, 0);
  expect(G.playersInfo[0].public.resources.cattle).toBe(1);
});
