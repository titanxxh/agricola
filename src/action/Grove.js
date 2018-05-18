import { ActionCard } from './actionCard';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class Grove extends collective(accumulative(ActionCard)) {
  constructor() {
    super({ title: 'Grove' });
    Object.assign(this, { delta: 1, type: 'wood' });
  }
}
