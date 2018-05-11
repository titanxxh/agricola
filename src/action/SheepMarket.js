import { ActionCard } from './actionCard';

export class SheepMarket extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'SheepMarket';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
