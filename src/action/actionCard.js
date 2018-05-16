export class ActionCard {
  constructor() {
    this.occupied = [];
  }

  title() {
    return '';
  }

  canChooseByPlayer(id) {
    // todo may be override by subclass
    return this.occupied.length === 0;
  }

  occupiedBy() {
    return this.occupied;
  }

  onTurnBegin() {}

  getResourceOfPlayer(G, id) {
    return {};
  }

  executeByPlayer(G, id) {
    console.log(`${this.title()} is executing by ${id}`);
  }
}
