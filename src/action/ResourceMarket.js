import { ActionCard } from './actionCard';

export class ResourceMarket extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'ResourceMarket';
  }

  detail() {
    return this.show();
  }

  show() {
    return '+1 reed, stone, food';
  }
}
