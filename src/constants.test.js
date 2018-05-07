import * as cs from './constants';

test('flatten stage actions', () => {
  let actions = cs.stageActions.reduce((acc, x) => ({ ...acc, ...x }));
  expect(actions.length).toBe(14);
});
