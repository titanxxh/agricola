import { ActionCard } from './actionCard';

export class PigMarket extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'PigMarket';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
