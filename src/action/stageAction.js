import { ActionCard } from './actionCard';

export class stageAction extends ActionCard {
  constructor({ round, title }) {
    super({ title });
    this.round = round;
  }

  visible(G) {
    // todo for test we open all actions
    return true;
    //return this.round <= G.currentRound;
  }
}
