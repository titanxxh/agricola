import { mergeResources } from './helperFunc';

export const collective = Sup =>
  class extends Sup {
    executeByPlayer(G, id) {
      if (super.executeByPlayer) {
        super.executeByPlayer(G, id);
      }
      const res = G.playersInfo[id].public.resources;
      const toAdd = super.getResourceOfPlayer(G, id);
      G.playersInfo[id].public.resources = mergeResources(res, toAdd);
      super.clearResourceOfPlayer(G, id);
    }
  };
