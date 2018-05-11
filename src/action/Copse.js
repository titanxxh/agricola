import { ActionCard } from './actionCard';

export class Copse extends ActionCard {
  constructor() {
    super({ delta: 1 });
  }

  title() {
    return 'Copse';
  }

  detail() {
    return '1 wood >';
  }

  show() {
    return `${this.acc} wood`;
  }
}
