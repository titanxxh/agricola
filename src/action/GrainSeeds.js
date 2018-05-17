import { ActionCard } from './actionCard';
import { mergeResources } from './mixins/helperFunc';
import { collective } from './mixins/collective';

class grainSeeds extends ActionCard {
  title() {
    return 'GrainSeeds';
  }

  detail() {
    return this.show();
  }

  show() {
    return '+1 grain';
  }

  getResourceOfPlayer(G, id) {
    return mergeResources(super.getResourceOfPlayer(), { grain: 1 });
  }
}

export class GrainSeeds extends collective(grainSeeds) {}
