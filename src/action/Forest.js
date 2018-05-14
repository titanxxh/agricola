import { ActionCard } from './actionCard';

export class Forest extends ActionCard {
  constructor() {
    super({ delta: 3 });
  }

  title() {
    return 'Forest';
  }

  detail() {
    return `${this.delta} wood >`;
  }

  show() {
    return `${this.acc} wood`;
  }
}
