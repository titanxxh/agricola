import { stageAction } from './stageAction';

export class FarmRedevelopment extends stageAction {
  constructor({ round }) {
    super({ round });
  }

  title() {
    return 'FarmRedevelopment';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
