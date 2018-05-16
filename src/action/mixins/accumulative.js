export const accumulative = Sup =>
  class extends Sup {
    constructor(...args) {
      super(...args);
      this.acc = 0;
    }

    onTurnBegin() {
      super.onTurnBegin();
      this.acc += this.delta;
    }

    getResourceOfPlayer(G, id) {
      let res = super.getResourceOfPlayer();
      if (res[this.type] !== undefined) {
        res[this.type] += this.acc;
      } else {
        res[this.type] = this.acc;
      }
      return Object.assign({}, res);
    }

    clearResourceOfPlayer(G, id) {
      this.acc = 0;
    }
  };
