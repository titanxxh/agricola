import { mergeResources } from './helperFunc';

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
      let v = {};
      v[this.type] = this.acc;
      return mergeResources(super.getResourceOfPlayer(), v);
    }

    clearResourceOfPlayer(G, id) {
      this.acc = 0;
    }

    detail() {
      return `${this.delta} ${this.type} >`;
    }

    show() {
      return `${this.acc} ${this.type}`;
    }
  };
