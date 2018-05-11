import { ActionCard } from './actionCard';

export class Cultivation extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'Cultivation';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
