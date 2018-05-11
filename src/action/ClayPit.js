import { ActionCard } from './actionCard';

export class ClayPit extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'ClayPit';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
