import { stageAction } from './stageAction';

export class VegetableSeeds extends stageAction {
  constructor({ round }) {
    super({ round });
  }

  title() {
    return 'VegetableSeeds';
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }
}
