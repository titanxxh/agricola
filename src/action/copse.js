import { ActionCard } from './actionCard';

export class Copse extends ActionCard {
  constructor() {
    super({ delta: 1 });
  }

  show() {
    return `${this.acc} wood`;
  }

  detail() {
    return `acc ${this.delta} wood`;
  }
}
