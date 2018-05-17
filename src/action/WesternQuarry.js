import { stageAction } from './stageAction';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class WesternQuarry extends collective(accumulative(stageAction)) {
  constructor({ round }) {
    super({ round });
    Object.assign(this, { delta: 1, type: 'stone' });
  }

  title() {
    return 'WesternQuarry';
  }

  detail() {
    return `${this.delta} ${this.type} >`;
  }

  show() {
    return `${this.acc} ${this.type}`;
  }
}
