const landWidth = 5;
const landHeight = 3;
export const blank = 'BL';
export const woodenRoom = 'WR';
export const clayRoom = 'CR';
export const stoneRoom = 'SR';
export const field = 'FD';

export class farmBoard {
  constructor() {
    this.land = Array.from({ length: landHeight * landWidth }, (v, i) => ({ grid: blank }));
    this.level = woodenRoom;
    this.setLand(0, 1, { grid: woodenRoom });
    this.setLand(0, 2, { grid: woodenRoom });
  }

  setLand(i, j, v) {
    this.land[j * landWidth + i] = v;
  }

  getLand(i, j) {
    return this.land[i * landWidth + j];
  }

  iterLand(f) {
    this.land.forEach((v, i) => {
      f(v, {
        x: Math.floor(i / landWidth),
        y: i % landHeight,
      });
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
