function BeautifulDays(i, j, k) {
  let count = 0;
  for (let a = i; a <= j; a++) {
    let reverseNumber = a.toString().split("").reverse().join("");
    let validDay = (a-reverseNumber)/k;
    if(validDay === Math.floor(validDay)) {
      count++;
    }
  }
  console.log(count)
  return count;
}

const rangeStart = 20;
const rangeEnd = 23;
const day = 6;
const result = BeautifulDays(rangeStart, rangeEnd, day);
