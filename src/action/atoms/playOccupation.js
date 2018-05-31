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
    let p = G.playersInfo[id];
    p.playOccupation(occupation);
  };

  return {
    preCheck,
    executeByPlayerOnAction,
  };
}
