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
    let p = G.playersInfo[id].public;
    let hands = G.playersInfo[id].secret;
    // todo maybe more hooks here
    hands.minors.delete(minor.name);
    p.improvements.set(minor.name, minor);
  };

  return {
    preCheck,
    executeByPlayerOnAction,
  };
}
