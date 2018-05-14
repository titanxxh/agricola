import { stageAction } from './stageAction';

export class EasternQuarry extends stageAction {
  constructor({ round }) {
    super({ round });
    this.delta = 1;
  }

  title() {
    return 'EasternQuarry';
  }

  detail() {
    return `${this.delta} stone >`;
  }

  show() {
    return `${this.acc} stone`;
  }
}
