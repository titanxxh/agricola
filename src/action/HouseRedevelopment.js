import { ActionCard } from './actionCard';

export class HouseRedevelopment extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'HouseRedevelopment';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
