import { ActionCard } from './actionCard';

export class MajorImprovement extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'MajorImprovement';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
