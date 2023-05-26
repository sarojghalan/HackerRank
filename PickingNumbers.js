function PickingNumber(a) {
  const sortedA = a.sort((a, b) => a - b);
  console.log(sortedA);
  let counter = 0;
  let counterFinal = 0;
  let i = 0;

  while (i < sortedA.length) {
    counter = 1;
    for (let j = i + 1; j < sortedA.length; j++) {
      if (
        sortedA[i] - sortedA[j] === 0 ||
        sortedA[i] - sortedA[j] === 1 ||
        sortedA[i] - sortedA[j] === -1
      ) {
        counter += 1;
      }
      if (counter > counterFinal) counterFinal = counter;
    }
    i++;
  }
  return counterFinal;
}
const arr = [2, 2, 4, 8, 2, 8, 6, 8, 1, 3];
const picked = PickingNumber(arr);
console.log(picked);
