function ExtraLongFactorials(n) {
  let factorials = BigInt(1);
  for (i = n; i > 0; i--) {
    factorials = factorials * BigInt(i);
  }
  return factorials.toString();
}

const number = 25;
const result = ExtraLongFactorials(number);
