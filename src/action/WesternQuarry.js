import { stageAction } from './stageAction';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class WesternQuarry extends collective(accumulative(stageAction)) {
  constructor({ round }) {
    super({ round, title: 'WesternQuarry' });
    Object.assign(this, { delta: 1, type: 'stone' });
  }

  detail() {
    return `${this.delta} ${this.type} >`;
  }

  show() {
    return `${this.acc} ${this.type}`;
  }
}
