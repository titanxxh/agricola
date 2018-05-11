import { ActionCard } from './actionCard';

export class Hollow extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'Hollow';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
