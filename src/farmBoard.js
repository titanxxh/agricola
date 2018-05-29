const landSize = { width: 5, height: 3 };
const fenceSize = { width: landSize.width * 2 + 1, height: landSize.height * 2 + 1 };
const delta = [{ x: -1, y: 0 }, { x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }];
export const blank = 'BL';
export const woodenRoom = 'WR';
export const clayRoom = 'CR';
export const stoneRoom = 'SR';
export const field = 'FD';

const indexToAccor = function(index, size) {
  return {
    y: Math.floor(index / size.width),
    x: index % size.width,
  };
};

const accorToIndex = function(pos, size) {
  return pos.y * size.width + pos.x;
};

const isSeparated = function(a, b, fence) {
  const middle = { x: a.x + b.x + 1, y: a.y + b.y + 1 };
  return fence[accorToIndex(middle, fenceSize)];
};

const inLand = function(a, size) {
  return a.x >= 0 && a.x < size.width && a.y >= 0 && a.y < size.height;
};

const floodFill = function(land, fence, pos) {
  land[accorToIndex(pos, landSize)] = 0;
  let filled = [pos];
  let head = 0;
  let tail = 1;
  let outOfLand = false;
  const applyDelta = function(s) {
    return v => {
      const neigh = { x: s.x + v.x, y: s.y + v.y };
      const neighIndex = accorToIndex(neigh, landSize);
      if (!isSeparated(s, neigh, fence)) {
        if (inLand(neigh, landSize) && land[neighIndex] >= 0) {
          if (land[neighIndex] > 0) {
            land[neighIndex] = 0;
            filled.push(neigh);
            tail++;
          }
        } else {
          outOfLand = true;
        }
      }
    };
  };
  while (head < tail) {
    const s = filled[head];
    head++;
    delta.forEach(applyDelta(s));
  }
  return { filled, outOfLand };
};

const pastureEdge = function(land, fence) {
  let valid = true;
  let f = new Set();
  land.forEach(v => {
    delta.forEach(dir => {
      const border = { x: 2 * v.x + 1 + dir.x, y: 2 * v.y + 1 + dir.y };
      const index = accorToIndex(border, fenceSize);
      if (fence[index]) {
        if (f.has(index)) {
          valid = false;
        }
        f.add(index);
      }
    });
  });
  if (valid) {
    return f;
  }
  return undefined;
};

export const validFencing = function(f) {
  let land = f.land.map(v => (v.grid === blank ? 1 : -1));
  const fence = f.fence.map(v => v.canBe);
  let must = new Map();
  f.fence.forEach((v, i) => {
    if (v.have) {
      must.set(i, 1);
    }
  });
  let pasture = [];
  for (let i = 0; i < land.length; i++) {
    if (land[i] > 0) {
      const pos = indexToAccor(i, landSize);
      const result = floodFill(land, fence, pos);
      if (!result.outOfLand) {
        const edge = pastureEdge(result.filled, fence);
        if (edge === undefined) {
          return { pasture: undefined, valid: false };
        }
        pasture.push({ land: result.filled, edge: edge });
      }
    }
  }
  if (pasture.length === 0) {
    return { pasture: undefined, valid: false };
  }
  pasture.forEach(v => {
    v.edge.forEach(e => {
      if (must.has(e)) {
        must.delete(e);
      }
    });
  });
  if (must.size > 0) {
    return { pasture: undefined, valid: false };
  }
  return { pasture, valid: true };
};

export class farmBoard {
  constructor() {
    this.land = Array.from({ length: landSize.width * landSize.height }, (v, i) => ({ grid: blank }));
    this.fence = Array.from({ length: fenceSize.width * fenceSize.height }, (v, i) => ({ have: false, canBe: false }));
    this.level = woodenRoom;
    this.setLand(0, 1, { grid: woodenRoom });
    this.setLand(0, 2, { grid: woodenRoom });
  }

  setLand(i, j, v) {
    this.land[j * landSize.width + i] = v;
  }

  getLand(i, j) {
    return this.land[j * landSize.width + i];
  }

  hasFence(i, j) {
    return this.fence[j * fenceSize.width + i].have;
  }

  buildFence(index) {
    this.fence[index] = { have: true, canBe: true };
  }

  iterLand(f) {
    this.land.forEach((v, i) => {
      f(v, indexToAccor(i, landSize));
    });
  }

  buildARoom({ x, y }) {
    this.setLand(x, y, { grid: this.level });
  }

  roomCount() {
    let c = 0;
    this.iterLand((v, pos) => {
      if (v.grid === woodenRoom || v.grid === clayRoom || v.grid === stoneRoom) {
        c++;
      }
    });
    return c;
  }
}
