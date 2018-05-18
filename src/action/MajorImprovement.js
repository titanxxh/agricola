import { stageAction } from './stageAction';

export class MajorImprovement extends stageAction {
  constructor({ round }) {
    super({ round, title: 'MajorImprovement' });
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
