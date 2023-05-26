function HurdleRace(k, h) {
  let highest = h.filter((i) => i > k);
  let highValue = Math.max(...highest);
  let dose = highest.length === 0 ? 0 : highValue - k;
  return dose;
}
let maxHeight = 8;
let height = [2, 5, 4, 5, 2, 3, 6,8,4,6];
const race = HurdleRace(maxHeight, height);
