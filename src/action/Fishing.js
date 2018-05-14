import { ActionCard } from './actionCard';

export class Fishing extends ActionCard {
  constructor() {
    super({ delta: 1 });
  }

  title() {
    return 'Fishing';
  }

  detail() {
    return `${this.delta} food >`;
  }

  show() {
    return `${this.acc} food`;
  }
}
