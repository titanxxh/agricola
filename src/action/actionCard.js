export class ActionCard {
  constructor({ title }) {
    this.occupied = [];
    this._title = title;
  }

  title() {
    return this._title;
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

  clearResourceOfPlayer(G, id) {}

  executeByPlayer(G, id) {
    console.log(`${this.title()} is executing by ${id}`);
    let p = G.playersInfo[id].public;
    p.farm.workingMembers.push(this.title());
    this.occupied.push(id);
  }
}
