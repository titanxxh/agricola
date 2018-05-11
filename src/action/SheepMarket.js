import { stageAction } from './stageAction';

export class SheepMarket extends stageAction {
  constructor({ round }) {
    super({ round });
  }

  title() {
    return 'SheepMarket';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
