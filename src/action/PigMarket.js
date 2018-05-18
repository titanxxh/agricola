import { stageAction } from './stageAction';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class PigMarket extends collective(accumulative(stageAction)) {
  constructor({ round }) {
    super({ round, title: 'PigMarket' });
    Object.assign(this, { delta: 1, type: 'boar' });
  }
}
