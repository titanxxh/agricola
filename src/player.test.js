import { initPlayer } from './player';

test('init player', () => {
  let player = initPlayer(0);
  expect(player.id).toBe(0);
  expect(player.public.resources.boar).toBe(0);
});
