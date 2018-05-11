import { stageAction } from './stageAction';

export class Fencing extends stageAction {
  constructor({ round }) {
    super({ round });
  }

  title() {
    return 'Fencing';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
