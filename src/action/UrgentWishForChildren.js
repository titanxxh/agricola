import { stageAction } from './stageAction';

export class UrgentWishForChildren extends stageAction {
  constructor({ round }) {
    super({ round });
  }

  title() {
    return 'UrgentWishForChildren';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
