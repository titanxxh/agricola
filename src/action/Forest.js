import { ActionCard } from './actionCard';

export class Forest extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'Forest';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
