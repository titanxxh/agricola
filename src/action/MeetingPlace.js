import { ActionCard } from './actionCard';

export class MeetingPlace extends ActionCard {
  constructor() {
    super({ delta: 0 });
  }

  title() {
    return 'MeetingPlace';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
