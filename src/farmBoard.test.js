import { farmBoard } from './farmBoard';

test('count rooms', () => {
  const a = new farmBoard();
  expect(a.roomCount()).toBe(2);
  a.buildARoom({ x: 0, y: 0 });
  expect(a.roomCount()).toBe(3);
});
