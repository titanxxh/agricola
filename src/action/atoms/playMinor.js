export function playMinor() {
  const preCheck = (G, id, action) => {
    let hands = G.playersInfo[id].secret;
    let canPlay = false;
    hands.minors.forEach((v, k) => {
      if (v.requirement(G, id)) {
        canPlay = true;
      }
    });
    return canPlay;
  };

  const executeByPlayerOnAction = (G, id, action, minor) => {
    let p = G.playersInfo[id];
    p.playMinor(minor);
  };

  return {
    preCheck,
    executeByPlayerOnAction,
  };
}
