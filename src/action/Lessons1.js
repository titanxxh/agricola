import { ActionCard } from './actionCard';
import { playOccupation } from './atoms/playOccupation';

export class Lessons1 extends ActionCard {
  constructor() {
    super({ title: 'Lessons1' });
  }

  detail() {
    return '1 food -> play a occ (first is free)';
  }

  show() {
    return '1 food -> play a occ';
  }

  preCheck(G, id) {
    const po = playOccupation();
    let p = G.playersInfo[id].public;
    if (p.occupations.size === 0) {
      return po.preCheck(G, id, this);
    } else {
      return p.resources.food >= 1 && po.preCheck(G, id, this);
    }
  }

  executeByPlayer(G, id) {
    super.executeByPlayer(G, id);
    let p = G.playersInfo[id].public;
    p.resources.food -= 1;
    const po = playOccupation();
    // todo set G to waiting playOccupation State
  }
}
