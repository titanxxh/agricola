import { ActionCard } from './actionCard';

export class TravelingPlayers extends ActionCard {
  constructor() {
    super({ delta: 1 });
  }

  title() {
    return 'TravelingPlayers';
  }

  detail() {
    return `${this.delta} food >`;
  }

  show() {
    return `${this.acc} food`;
  }
}
