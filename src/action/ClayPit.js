import { ActionCard } from './actionCard';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class ClayPit extends collective(accumulative(ActionCard)) {
  constructor() {
    super({ title: 'ClayPit' });
    Object.assign(this, { delta: 1, type: 'clay' });
  }
}
