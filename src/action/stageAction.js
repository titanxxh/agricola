import { ActionCard } from './actionCard';

export class stageAction extends ActionCard {
  constructor({ round }) {
    super({ delta: 0 });
    this.round = round;
  }

  visible(G) {
    return this.round <= G.currentRound;
  }

  clearResourceOfPlayer(G, id) {
    this.acc = 0;
  }
}
