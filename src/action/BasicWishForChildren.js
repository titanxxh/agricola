import { stageAction } from './stageAction';
import { wishForChild } from './atoms/wishForChild';

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

  preCheck(G, id) {
    const wish = wishForChild({});
    return wish.preCheck(G, id, this);
  }

  executeByPlayer(G, id) {
    super.executeByPlayer(G, id);
    const wish = wishForChild({});
    wish.executeByPlayerOnAction(G, id, this);
  }
}
