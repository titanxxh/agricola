import { ActionCard } from './actionCard';
import { playOccupation } from './atoms/playOccupation';

export class Lessons2 extends ActionCard {
  constructor() {
    super({ title: 'Lessons2' });
  }

  detail() {
    return '2 food -> play a occ (first 2 occ only cost 1)';
  }

  show() {
    return '2 food -> play a occ';
  }

  preCheck(G, id) {
    const po = playOccupation();
    let p = G.playersInfo[id].public;
    if (p.occupations.size < 2) {
      return p.resources.food > 1 && po.preCheck(G, id, this);
    } else {
      return p.resources.food > 2 && po.preCheck(G, id, this);
    }
  }

  executeByPlayer(G, id) {
    super.executeByPlayer(G, id);
    let p = G.playersInfo[id].public;
    p.resources.food -= 2;
    const po = playOccupation();
    // todo set G to waiting playOccupation State
  }
}
