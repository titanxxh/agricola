export function wishForChild() {
  const preCheck = (G, id, action) => {
    if (action.name === 'UrgentWishForChildren') {
      return true;
    } else {
      const p = G.playersInfo[id].public;
      return p.farm.members < p.farm.board.roomCount();
    }
  };

  const executeByPlayerOnAction = (G, id, action) => {
    let p = G.playersInfo[id].public;
    p.farm.newborn += 1;
    p.farm.members += 1;
    p.farm.workingMembers.push(action.title());
    action.occupied.push(id);
  };

  return {
    preCheck,
    executeByPlayerOnAction,
  };
}
