import { stageAction } from './stageAction';

export class SheepMarket extends stageAction {
  constructor({ round }) {
    super({ round });
    this.delta = 1;
  }

  title() {
    return 'SheepMarket';
  }

  detail() {
    return `${this.delta} sheep >`;
  }

  show() {
    return `${this.acc} sheep`;
  }
}
