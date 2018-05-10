import { ActionCard } from './actionCard';

export class Copse extends ActionCard {
  constructor() {
    super({ delta: 1 });
  }

  title() {
    return 'Copse';
  }

  show() {
    return `${this.acc} wood`;
  }

  detail() {
    return `acc ${this.delta} wood`;
  }
}
