import { stageAction } from './stageAction';

export class UrgentWishForChildren extends stageAction {
  constructor({ round }) {
    super({ round, title: 'UrgentWishForChildren' });
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
