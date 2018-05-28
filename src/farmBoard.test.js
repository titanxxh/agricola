import { farmBoard, validFencing } from './farmBoard';

it('count rooms', () => {
  const a = new farmBoard();
  expect(a.roomCount()).toBe(2);
  a.buildARoom({ x: 0, y: 0 });
  expect(a.roomCount()).toBe(3);
});

function expectPastureStructure(actual, expected) {
  expect(actual).toHaveLength(expected.length);
  expected.forEach(v => {
    expect(actual).toContainEqual(v);
  });
}

describe('fencing', () => {
  it('valid fencing, 1 grid 1 pasture', () => {
    const a = new farmBoard();
    const fence = [1, 11, 13, 23];
    fence.forEach(v => {
      a.buildFence(v);
    });
    const result = validFencing(a);
    expect(result.valid).toBeTruthy();
    expectPastureStructure(result.pasture[0].land, [{ x: 0, y: 0 }]);
  });

  it('valid fencing, 9 grid 1 pasture', () => {
    const a = new farmBoard();
    const fence = [3, 5, 7, 13, 35, 57, 69, 71, 73, 63, 41, 19];
    fence.forEach(v => {
      a.buildFence(v);
    });
    const result = validFencing(a);
    expect(result.valid).toBeTruthy();
    expectPastureStructure(result.pasture[0].land, [
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
    ]);
  });

  it('valid fencing, 9 grid 2 pasture', () => {
    const a = new farmBoard();
    const fence = [3, 5, 7, 13, 35, 57, 69, 71, 73, 63, 41, 19, 27, 37, 39, 49];
    fence.forEach(v => {
      a.buildFence(v);
    });
    const result = validFencing(a);
    expect(result.valid).toBeTruthy();
    expect(result.pasture).toHaveLength(2);
    expectPastureStructure(result.pasture[0].land, [
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 1, y: 1 },
      { x: 3, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
    ]);
    expectPastureStructure(result.pasture[1].land, [{ x: 2, y: 1 }]);
  });

  it('valid fencing, 6 grid 4 pasture', () => {
    const a = new farmBoard();
    const fence = [3, 5, 7, 13, 35, 47, 49, 51, 25, 27, 29, 15, 37, 41, 19];
    fence.forEach(v => {
      a.buildFence(v);
    });
    const result = validFencing(a);
    expect(result.valid).toBeTruthy();
    expect(result.pasture).toHaveLength(4);
    expectPastureStructure(result.pasture[0].land, [{ x: 1, y: 0 }]);
    expectPastureStructure(result.pasture[1].land, [{ x: 2, y: 0 }, { x: 3, y: 0 }]);
    expectPastureStructure(result.pasture[2].land, [{ x: 1, y: 1 }]);
    expectPastureStructure(result.pasture[3].land, [{ x: 2, y: 1 }, { x: 3, y: 1 }]);
  });

  it('invalid fencing, no pasture', () => {
    const a = new farmBoard();
    const fence = [1, 11, 13];
    fence.forEach(v => {
      a.buildFence(v);
    });
    const result = validFencing(a);
    expect(result.valid).toBeFalsy();
  });

  it('invalid fencing, 1 fence out of 1 pasture', () => {
    const a = new farmBoard();
    const fence = [1, 11, 13, 23, 3];
    fence.forEach(v => {
      a.buildFence(v);
    });
    const result = validFencing(a);
    expect(result.valid).toBeFalsy();
  });

  it('invalid fencing, 1 fence inside 1 pasture', () => {
    const a = new farmBoard();
    const fence = [3, 5, 7, 13, 35, 57, 69, 71, 73, 63, 41, 19, 61];
    fence.forEach(v => {
      a.buildFence(v);
    });
    const result = validFencing(a);
    expect(result.valid).toBeFalsy();
  });
});
