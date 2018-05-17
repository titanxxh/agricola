export const mergeResources = (res, x) => {
  let m = Object.assign({}, res);
  for (let key of Object.keys(x)) {
    if (m[key] !== undefined) {
      m[key] += x[key];
    } else {
      m[key] = x[key];
    }
  }
  return m;
};
