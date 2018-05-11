import { ActionCard } from './actionCard';

export class Grove extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'Grove';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
