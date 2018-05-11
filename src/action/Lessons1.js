import { ActionCard } from './actionCard';

export class Lessons1 extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'Lessons1';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
