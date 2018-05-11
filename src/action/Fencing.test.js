import { Fencing } from './Fencing';

test('fencing visible', () => {
  let a = new Fencing({ round: 1 });
  expect(a.delta).toBe(0);
  expect(a.visible({ currentRound: 0 })).toBe(false);
  expect(a.visible({ currentRound: 1 })).toBe(true);
});
