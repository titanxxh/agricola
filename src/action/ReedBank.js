import { ActionCard } from './actionCard';

export class ReedBank extends ActionCard {
  constructor() {
    super({ delta: 1 });
  }

  title() {
    return 'ReedBank';
  }

  detail() {
    return `${this.delta} reed >`;
  }

  show() {
    return `${this.acc} reed`;
  }
}
