import { ActionCard } from './actionCard';

export class Hollow extends ActionCard {
  constructor() {
    super({ delta: 2 });
  }

  title() {
    return 'Hollow';
  }

  detail() {
    return `${this.delta} clay >`;
  }

  show() {
    return `${this.acc} clay`;
  }
}
