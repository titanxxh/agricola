import { stageAction } from './stageAction';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class CattleMarket extends collective(accumulative(stageAction)) {
  constructor({ round }) {
    super({ round, title: 'CattleMarket' });
    Object.assign(this, { delta: 1, type: 'cattle' });
  }
}
