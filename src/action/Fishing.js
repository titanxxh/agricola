import { ActionCard } from './actionCard';

export class Fishing extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'Fishing';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
