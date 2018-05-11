import { ActionCard } from './actionCard';

export class ResourceMarket extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'ResourceMarket';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
