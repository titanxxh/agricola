import { ActionCard } from './actionCard';

export class TravelingPlayers extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'TravelingPlayers';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
