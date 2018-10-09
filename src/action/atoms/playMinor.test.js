import { initPlayer } from '../../player';
import { playMinor } from './playMinor';

test('play a minor from hand', () => {
  const atom = playMinor();
  let G = { playersInfo: [initPlayer(0)] };
  let p = G.playersInfo[0];
  let hands = p.secret;
  expect(atom.preCheck(G, 0)).toBe(false);
  p.draftMinor({
    name: 'axe',
    requirement: (G, id) => true,
  });
  expect(atom.preCheck(G, 0)).toBe(true);

  atom.executeByPlayerOnAction(G, 0, {}, 'axe');
  expect(p.public.improvements.get('axe')).toBeDefined();
  expect(hands.minors.get('axe')).not.toBeDefined();
});
