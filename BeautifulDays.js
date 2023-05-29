function BeautifulDays(i, j, k) {
  let count = 0;
  for (let a = i; a <= j; a++) {
    // reversing a number
    let reverseNumber = a.toString().split("").reverse().join("");
    // calculating valid day as given in question
    let validDay = (a - reverseNumber) / k;
    // checking if valid day is equal to its nearest value Math.floor ()
    if (validDay === Math.floor(validDay)) {
      count++;
    }
  }
  console.log(count);
  //returning count
  return count;
}

const rangeStart = 20;
const rangeEnd = 23;
const day = 6;
const result = BeautifulDays(rangeStart, rangeEnd, day);
