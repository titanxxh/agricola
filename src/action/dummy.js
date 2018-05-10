import { ActionCard } from './actionCard';

export class Dummy extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'dummy';
  }

  show() {
    return '';
  }

  detail() {
    return `+1 dummy`;
  }
}
