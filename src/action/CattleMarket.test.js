import { CattleMarket } from './CattleMarket';

test('cattle market acc cattle', () => {
  let a = new CattleMarket({ round: 9 });
  expect(a.acc).toBe(0);
  a.onTurnBegin();
  expect(a.acc).toBe(1);
});
