import { stageAction } from './stageAction';

export class PigMarket extends stageAction {
  constructor({ round }) {
    super({ round });
  }

  title() {
    return 'PigMarket';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
