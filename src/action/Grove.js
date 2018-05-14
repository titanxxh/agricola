import { ActionCard } from './actionCard';

export class Grove extends ActionCard {
  constructor() {
    super({ delta: 2 });
  }

  title() {
    return 'Grove';
  }

  detail() {
    return `${this.delta} wood >`;
  }

  show() {
    return `${this.acc} wood`;
  }
}
