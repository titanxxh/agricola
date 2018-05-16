export const collective = Sup =>
  class extends Sup {
    constructor(...args) {
      super(...args);
    }

    executeByPlayer(G, id) {
      if (super.executeByPlayer) {
        super.executeByPlayer(G, id);
      }
      let res = G.playersInfo[id].public.resources;
      const toAdd = super.getResourceOfPlayer(G, id);
      for (let key of Object.keys(toAdd)) {
        res[key] += toAdd[key];
      }
      super.clearResourceOfPlayer(G, id);
    }
  };
