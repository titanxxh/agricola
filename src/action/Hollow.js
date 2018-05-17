import { ActionCard } from './actionCard';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class Hollow extends collective(accumulative(ActionCard)) {
  constructor() {
    super();
    Object.assign(this, { delta: 2, type: 'clay' });
  }

  title() {
    return 'Hollow';
  }

  detail() {
    return `${this.delta} ${this.type} >`;
  }

  show() {
    return `${this.acc} ${this.type}`;
  }
}
