import { stageAction } from './stageAction';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class EasternQuarry extends collective(accumulative(stageAction)) {
  constructor({ round }) {
    super({ round, title: 'EasternQuarry' });
    Object.assign(this, { delta: 1, type: 'stone' });
  }
}
