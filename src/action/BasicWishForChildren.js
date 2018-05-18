import { stageAction } from './stageAction';

export class BasicWishForChildren extends stageAction {
  constructor({ round }) {
    super({ round, title: 'BasicWishForChildren' });
  }

  detail() {
    return '';
  }

  show() {
    return '';
  }

  executeByPlayer(G, id) {
    super.executeByPlayer(G, id);
    let p = G.playersInfo[id].public;
    p.farm.newborn += 1;
    p.farm.members += 1;
    p.farm.workingMembers.push(this.title());
    this.occupied.push(id);
  }
}
