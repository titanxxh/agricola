import { ActionCard } from './actionCard';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class ReedBank extends collective(accumulative(ActionCard)) {
  constructor() {
    super({ delta: 1, title: 'ReedBank' });
    Object.assign(this, { delta: 1, type: 'reed' });
  }

  detail() {
    return `${this.delta} ${this.type} >`;
  }

  show() {
    return `${this.acc} ${this.type}`;
  }
}
