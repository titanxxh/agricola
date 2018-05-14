import { ActionCard } from './actionCard';

export class ClayPit extends ActionCard {
  constructor() {
    super({ delta: 1 });
  }

  title() {
    return 'ClayPit';
  }

  detail() {
    return `${this.delta} clay >`;
  }

  show() {
    return `${this.acc} clay`;
  }
}
