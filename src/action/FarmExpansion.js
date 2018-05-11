import { ActionCard } from './actionCard';

export class FarmExpansion extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'FarmExpansion';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
