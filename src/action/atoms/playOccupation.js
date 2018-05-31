export function playOccupation() {
  const preCheck = (G, id, action) => {
    let hands = G.playersInfo[id].secret;
    let canPlay = false;
    hands.occupations.forEach((v, k) => {
      if (v.requirement(G, id)) {
        canPlay = true;
      }
    });
    return canPlay;
  };

  const executeByPlayerOnAction = (G, id, action, occupation) => {
    let p = G.playersInfo[id].public;
    let hands = G.playersInfo[id].secret;
    // todo maybe more hooks here
    hands.occupations.delete(occupation.name);
    p.occupations.set(occupation.name, occupation);
  };

  return {
    preCheck,
    executeByPlayerOnAction,
  };
}
