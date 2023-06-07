function FindTheDigit(n) {
  let number = n.toString();
  let count = 0;
  console.log(n.toString());
  for (let i = 0; i < number.length; i++) {
    if (n % number[i] === 0) {
      count++;
    }
  }
  console.log(count);
  return count;
}
const digit = 123;
const result = FindTheDigit(digit);
