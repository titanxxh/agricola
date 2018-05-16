import { ActionCard } from './actionCard';
import { collective } from './mixins/collective';
import { accumulative } from './mixins/accumulative';

export class Copse extends collective(accumulative(ActionCard)) {
  constructor() {
    super();
    Object.assign(this, { delta: 1, type: 'wood' });
  }

  title() {
    return 'Copse';
  }

  detail() {
    return `${this.delta} ${this.type} >`;
  }

  show() {
    return `${this.acc} ${this.type}`;
  }
}
