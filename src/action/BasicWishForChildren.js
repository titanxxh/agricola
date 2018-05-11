import { stageAction } from './stageAction';

export class BasicWishForChildren extends stageAction {
  constructor({ round }) {
    super({ round });
  }

  title() {
    return 'BasicWishForChildren';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
