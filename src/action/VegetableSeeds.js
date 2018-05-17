import { stageAction } from './stageAction';
import { collective } from './mixins/collective';
import { mergeResources } from './mixins/helperFunc';

class vegetableSeeds extends stageAction {
  constructor({ round }) {
    super({ round });
  }

  title() {
    return 'VegetableSeeds';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }

  getResourceOfPlayer(G, id) {
    return mergeResources(super.getResourceOfPlayer(), { vegetable: 1 });
  }
}

export class VegetableSeeds extends collective(vegetableSeeds) {
  constructor({ round }) {
    super({ round });
  }
}
