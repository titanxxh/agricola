import { mergeResources } from './helperFunc';

test('merge two resources into one', () => {
  const a = { wood: 1, food: 2 };
  const b = { food: 2, vegetable: 1 };
  const acc = mergeResources(a, b);
  expect(acc).toEqual({ wood: 1, food: 4, vegetable: 1 });
});
