import { ActionCard } from './actionCard';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class Forest extends collective(accumulative(ActionCard)) {
  constructor() {
    super();
    Object.assign(this, { delta: 1, type: 'wood' });
  }

  title() {
    return 'Forest';
  }

  detail() {
    return `${this.delta} ${this.type} >`;
  }

  show() {
    return `${this.acc} ${this.type}`;
  }
}
