function utopianTree(n) {
  let height = 1; // at least height === 1, (if n === 0);
  for (let i = 1; i <= n; i++) {
    // if current cycle is odd , height will be doubled
    // if current cycle is even, height will be increases by 1
    i % 2 !== 0 ? (height *= 2) : (height += 1);
  }
  return height;
}
const arr = [2, 0, 1];
const tree = utopianTree(arr);
