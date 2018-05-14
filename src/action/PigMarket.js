import { stageAction } from './stageAction';

export class PigMarket extends stageAction {
  constructor({ round }) {
    super({ round });
    this.delta = 1;
  }

  title() {
    return 'PigMarket';
  }

  detail() {
    return `${this.delta} boar >`;
  }

  show() {
    return `${this.acc} boar`;
  }
}
