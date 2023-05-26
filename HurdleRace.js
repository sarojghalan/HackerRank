function HurdleRace(k, h) {
    // filtering value greater than max height
  let highest = h.filter((i) => i > k);

  // storing highest number from filter array
  let highValue = Math.max(...highest);
  // rendering 0 if filter array has no greater value than max height
  let dose = highest.length === 0 ? 0 : highValue - k;
  return dose;
}
let maxHeight = 8;
let height = [2, 5, 4, 5, 2, 3, 6,8,4,6];
const race = HurdleRace(maxHeight, height);
