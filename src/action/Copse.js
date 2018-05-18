import { ActionCard } from './actionCard';
import { collective } from './mixins/collective';
import { accumulative } from './mixins/accumulative';

export class Copse extends collective(accumulative(ActionCard)) {
  constructor() {
    super({ title: 'Copse' });
    Object.assign(this, { delta: 1, type: 'wood' });
  }
}
