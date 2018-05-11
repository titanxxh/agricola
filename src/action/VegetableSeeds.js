import { ActionCard } from './actionCard';

export class VegetableSeeds extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'VegetableSeeds';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
