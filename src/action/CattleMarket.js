import { stageAction } from './stageAction';

export class CattleMarket extends stageAction {
  constructor({ round }) {
    super({ round });
    this.delta = 1;
  }

  title() {
    return 'CattleMarket';
  }

  detail() {
    return `${this.delta} cattle >`;
  }

  show() {
    return `${this.acc} cattle`;
  }
}
