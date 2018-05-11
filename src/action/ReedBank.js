import { ActionCard } from './actionCard';

export class ReedBank extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'ReedBank';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
