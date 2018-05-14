import { ActionCard } from './actionCard';

export class GrainSeeds extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'GrainSeeds';
  }

  detail() {
    return this.show();
  }

  show() {
    return '+1 grain';
  }
}
