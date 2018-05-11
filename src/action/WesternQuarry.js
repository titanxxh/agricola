import { ActionCard } from './actionCard';

export class WesternQuarry extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'WesternQuarry';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
