import { ActionCard } from './actionCard';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class TravelingPlayers extends collective(accumulative(ActionCard)) {
  constructor() {
    super();
    Object.assign(this, { delta: 1, type: 'food' });
  }

  title() {
    return 'TravelingPlayers';
  }

  detail() {
    return `${this.delta} ${this.type} >`;
  }

  show() {
    return `${this.acc} ${this.type}`;
  }
}
