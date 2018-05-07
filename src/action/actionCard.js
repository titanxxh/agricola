export class ActionCard {
  constructor({ delta }) {
    this.occupied = -1;
    this.acc = 0;
    this.delta = delta;
  }

  isAcc() {
    return this.delta > 0;
  }

  onTurnBegin() {
    this.acc += this.delta;
  }
}
