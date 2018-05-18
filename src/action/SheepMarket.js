import { stageAction } from './stageAction';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class SheepMarket extends collective(accumulative(stageAction)) {
  constructor({ round }) {
    super({ round, title: 'SheepMarket' });
    Object.assign(this, { delta: 1, type: 'sheep' });
  }

  detail() {
    return `${this.delta} ${this.type} >`;
  }

  show() {
    return `${this.acc} ${this.type}`;
  }
}
