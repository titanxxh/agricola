import { stageAction } from './stageAction';

export class WesternQuarry extends stageAction {
  constructor({ round }) {
    super({ round });
    this.delta = 1;
  }

  title() {
    return 'WesternQuarry';
  }

  detail() {
    return `${this.delta} stone >`;
  }

  show() {
    return `${this.acc} stone`;
  }
}
