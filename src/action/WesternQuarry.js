import { stageAction } from './stageAction';

export class WesternQuarry extends stageAction {
  constructor({ round }) {
    super({ round });
  }

  title() {
    return 'WesternQuarry';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
