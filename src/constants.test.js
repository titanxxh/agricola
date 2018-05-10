import * as cs from './constants';

test('flatten stage actions', () => {
  let actions = cs.getShuffledStageActions(Math.random);
  expect(actions.length).toBe(14);
});
