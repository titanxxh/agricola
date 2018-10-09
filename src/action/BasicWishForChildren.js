import { stageAction } from './stageAction';
import { wishForChild } from './atoms/wishForChild';
import { playMinor } from './atoms/playMinor';

export class BasicWishForChildren extends stageAction {
  constructor({ round }) {
    super({ round, title: 'BasicWishForChildren' });
  }

  detail() {
    return 'born (must have room) then play a minor';
  }

  show() {
    return 'born then play a minor';
  }

  preCheck(G, id) {
    const wish = wishForChild();
    return wish.preCheck(G, id, this);
  }

  executeByPlayer(G, id) {
    super.executeByPlayer(G, id);
    const wish = wishForChild();
    wish.executeByPlayerOnAction(G, id, this);
    const pm = playMinor();
    if (pm.preCheck(G, id, this)) {
      // todo set G to waiting playMinor State
    } else {
      // todo set G to waiting confirm end turn State
    }
  }
}
