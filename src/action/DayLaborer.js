import { ActionCard } from './actionCard';
import { collective } from './mixins/collective';
import { mergeResources } from './mixins/helperFunc';

class dayLaborer extends ActionCard {
  title() {
    return 'DayLaborer';
  }

  detail() {
    return this.show();
  }

  show() {
    return '+2 food';
  }

  getResourceOfPlayer(G, id) {
    return mergeResources(super.getResourceOfPlayer(), { food: 2 });
  }
}

export class DayLaborer extends collective(dayLaborer) {}
