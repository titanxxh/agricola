import { initPlayer } from '../../player';
import { playMinor } from './playMinor';

test('play a minor from hand', () => {
  const atom = playMinor({});
  let G = { playersInfo: [initPlayer(0)] };
  let p = G.playersInfo[0].public;
  let hands = G.playersInfo[0].secret;
  expect(atom.preCheck(G, 0)).toBe(false);
  hands.minors.set('axe', {
    requirement: (G, id) => {
      return true;
    },
  });
  expect(atom.preCheck(G, 0)).toBe(true);

  atom.executeByPlayerOnAction(
    G,
    0,
    {},
    {
      name: 'axe',
    }
  );
  expect(p.improvements.get('axe')).toBeDefined();
  expect(hands.minors.get('axe')).not.toBeDefined();
});
