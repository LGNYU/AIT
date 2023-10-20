const f = (oldFunc) => {
  const g = (...args) => {
    // eventually we call oldFunc
    oldFunc(...args)
  }
  return g // "replaces" oldFunc / mimics its behavior
}
// they allow u to modify behavior of func without changing its source code
