import { ActionCard } from './actionCard';

export class Copse extends ActionCard {
  constructor() {
    super({ delta: 1 });
  }

  title() {
    return 'Copse';
  }

  detail() {
    return `${this.delta} wood >`;
  }

  show() {
    return `${this.acc} wood`;
  }

  executeByPlayer(G, id) {
    super.executeByPlayer(G, id);
    G.playersInfo[id].public.resources.wood += this.acc;
    this.acc = 0;
  }
}
