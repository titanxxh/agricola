import { stageAction } from './stageAction';

export class FarmRedevelopment extends stageAction {
  constructor({ round }) {
    super({ round, title: 'FarmRedevelopment' });
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
