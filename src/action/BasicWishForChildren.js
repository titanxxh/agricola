import { ActionCard } from './actionCard';

export class BasicWishForChildren extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'BasicWishForChildren';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
