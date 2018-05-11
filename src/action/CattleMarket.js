import { stageAction } from './stageAction';

export class CattleMarket extends stageAction {
  constructor({ round }) {
    super({ round });
  }

  title() {
    return 'CattleMarket';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
