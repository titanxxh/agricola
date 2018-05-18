import { ActionCard } from './actionCard';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class Fishing extends collective(accumulative(ActionCard)) {
  constructor() {
    super({ title: 'Fishing' });
    Object.assign(this, { delta: 1, type: 'food' });
  }

  detail() {
    return `${this.delta} ${this.type} >`;
  }

  show() {
    return `${this.acc} ${this.type}`;
  }
}
