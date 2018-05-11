import { ActionCard } from './actionCard';

export class GrainUtilization extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'GrainUtilization';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
