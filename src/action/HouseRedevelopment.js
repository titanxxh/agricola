import { stageAction } from './stageAction';

export class HouseRedevelopment extends stageAction {
  constructor({ round }) {
    super({ round });
  }

  title() {
    return 'HouseRedevelopment';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
