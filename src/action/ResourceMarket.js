import { ActionCard } from './actionCard';
import { mergeResources } from './mixins/helperFunc';
import { collective } from './mixins/collective';

class resourceMarket extends ActionCard {
  constructor() {
    super({ title: 'ResourceMarket' });
  }

  detail() {
    return this.show();
  }

  show() {
    return '+1 reed, stone, food';
  }

  getResourceOfPlayer(G, id) {
    return mergeResources(super.getResourceOfPlayer(), { reed: 1, stone: 1, food: 1 });
  }
}

export class ResourceMarket extends collective(resourceMarket) {}
