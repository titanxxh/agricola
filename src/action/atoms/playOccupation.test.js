import { initPlayer } from '../../player';
import { playOccupation } from './playOccupation';

test('play a minor from hand', () => {
  const atom = playOccupation();
  let G = { playersInfo: [initPlayer(0)] };
  let p = G.playersInfo[0].public;
  let hands = G.playersInfo[0].secret;
  expect(atom.preCheck(G, 0)).toBe(false);
  hands.occupations.set('tutor', {
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
      name: 'tutor',
    }
  );
  expect(p.occupations.get('tutor')).toBeDefined();
  expect(hands.occupations.get('tutor')).not.toBeDefined();
});
