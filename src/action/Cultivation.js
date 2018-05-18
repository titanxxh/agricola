import { stageAction } from './stageAction';

export class Cultivation extends stageAction {
  constructor({ round }) {
    super({ round, title: 'Cultivation' });
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
