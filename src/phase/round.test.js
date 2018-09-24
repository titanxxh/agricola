import { initPlayer } from '../player';
import { round } from './round';

test('round robin turn order', () => {
  // player order 3-2-1-0
  const numPlayers = 4;
  let G = {
    playersInfo: Array.from({ length: numPlayers }, (v, i) => initPlayer(i)),
    sittingOrder: Array.from({ length: numPlayers }, (v, i) => i),
    startingPlayerToken: 1,
  };
  const round1 = round(1);
  expect(round1.turnOrder.first(G, {})).toBe({
    playerOrderPos: 1,
    actionPlayers: ['1'],
  });
  expect(
    round1.turnOrder.next(G, {
      currentPlayer: '1',
      numPlayers: numPlayers,
    })
  ).toBe({
    playerOrderPos: 2,
    actionPlayers: ['2'],
  });
});
