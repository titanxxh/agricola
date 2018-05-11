import { stageAction } from './stageAction';

export class GrainUtilization extends stageAction {
  constructor({ round }) {
    super({ round });
  }

  title() {
    return 'GrainUtilization';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
