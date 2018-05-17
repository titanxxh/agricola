import { stageAction } from './stageAction';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class PigMarket extends collective(accumulative(stageAction)) {
  constructor({ round }) {
    super({ round });
    Object.assign(this, { delta: 1, type: 'boar' });
  }

  title() {
    return 'PigMarket';
  }

  detail() {
    return `${this.delta} ${this.type} >`;
  }

  show() {
    return `${this.acc} ${this.type}`;
  }
}
