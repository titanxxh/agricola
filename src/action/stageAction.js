import { ActionCard } from './actionCard';

export class stageAction extends ActionCard {
  constructor({ round, title }) {
    super({ title });
    this.round = round;
  }

  visible(G) {
    return this.round <= G.currentRound;
  }
}
