import { ActionCard } from './actionCard';

export class Fencing extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'Fencing';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
