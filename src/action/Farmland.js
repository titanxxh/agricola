import { ActionCard } from './actionCard';

export class Farmland extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'Farmland';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
