import { ActionCard } from './actionCard';

export class Dummy extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  show() {
    return `+1 dummy`;
  }

  detail() {
    return `+1 dummy`;
  }
}
