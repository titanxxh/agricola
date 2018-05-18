import { ActionCard } from './actionCard';
import { accumulative } from './mixins/accumulative';
import { collective } from './mixins/collective';

export class Forest extends collective(accumulative(ActionCard)) {
  constructor() {
    super({ title: 'Forest' });
    Object.assign(this, { delta: 1, type: 'wood' });
  }
}
