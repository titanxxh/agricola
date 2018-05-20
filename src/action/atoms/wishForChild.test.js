import { initPlayer } from '../../player';
import { wishForChild } from './wishForChild';

test('basic wish child check', () => {
  const wish = wishForChild({});
  let G = { playersInfo: [initPlayer(0)] };
  let a = class BasicWishForChildren {};
  expect(wish.preCheck(G, 0, a)).toBe(false);
  let farm = G.playersInfo[0].public.farm;
  farm.board.buildARoom({ x: 0, y: 0 });
  expect(wish.preCheck(G, 0, a)).toBe(true);
});

test('urgent wish child check', () => {
  const wish = wishForChild({});
  let G = { playersInfo: [initPlayer(0)] };
  let a = class UrgentWishForChildren {};
  expect(wish.preCheck(G, 0, a)).toBe(true);
});
