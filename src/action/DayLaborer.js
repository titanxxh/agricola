import { ActionCard } from './actionCard';

export class DayLaborer extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'DayLaborer';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
