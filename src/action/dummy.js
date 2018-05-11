import { ActionCard } from './actionCard';

export class Dummy extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'Title';
  }

  detail() {
    return `Detail`;
  }

  show() {
    return '';
  }
}
