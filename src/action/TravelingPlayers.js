import { ActionCard } from './actionCard';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class TravelingPlayers extends collective(accumulative(ActionCard)) {
  constructor() {
    super({ title: 'TravelingPlayers' });
    Object.assign(this, { delta: 1, type: 'food' });
  }
}
