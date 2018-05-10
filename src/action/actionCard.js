export class ActionCard {
  constructor({ delta }) {
    this.occupied = [];
    this.acc = 0;
    this.delta = delta;
  }

  canChooseByPlayer(id) {
    // todo may be override by subclass
    return this.occupied.length === 0;
  }

  occupiedBy() {
    return this.occupied;
  }

  isAccumulative() {
    return this.delta > 0;
  }

  onTurnBegin() {
    this.acc += this.delta;
  }
}
