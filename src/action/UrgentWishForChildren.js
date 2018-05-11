import { ActionCard } from './actionCard';

export class UrgentWishForChildren extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'UrgentWishForChildren';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
