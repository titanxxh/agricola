import { stageAction } from './stageAction';

export class Fencing extends stageAction {
  constructor({ round }) {
    super({ round, title: 'Fencing' });
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
