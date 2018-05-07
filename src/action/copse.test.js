import { Copse } from './copse';

test('copse acc wood', () => {
  let a = new Copse();
  expect(a.acc).toBe(0);
  a.onTurnBegin();
  expect(a.acc).toBe(1);
});
