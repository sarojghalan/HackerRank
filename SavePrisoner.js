function saveThePrisoner(n, m, s) {
  // Calculating the remainder (position of the last treat relative to the starting chair)
  const remainder = m % n;
  console.log(remainder)

  // Calculate the chair number of the prisoner to warn
  let warnChair = (s + remainder - 1) % n;
  console.log(warnChair);

  // Handle the case where warnChair is 0 (last chair)
  // if (warnChair === 0) {
  //   warnChair = n;
  // }

  return warnChair;
}
const n = 3; // number of prisoners
const m = 7; // number of treats
const s = 3; // starting chair

const prisonerToWarn = saveThePrisoner(n, m, s);
