import { initPlayer } from './player';

test('init player', () => {
  let player = initPlayer(0);
  console.log(player);
  expect(player.public.resources.boar).toBe(0);
});
