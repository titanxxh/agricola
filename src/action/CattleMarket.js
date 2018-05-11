import { ActionCard } from './actionCard';

export class CattleMarket extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'CattleMarket';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
