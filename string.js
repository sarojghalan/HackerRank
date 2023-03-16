let str = "abcdddeeeeaabbbcd";
let currentChar = str[0];
let count = 1;
let start = 0;
let repeats = [];

for (let i = 1; i < str.length; i++) {
  if (str[i] === currentChar) {
    count++;
  } else {
    if (count > 2) {
      repeats.push([start, i-1]);
    }
    currentChar = str[i];
    count = 1;
    start = i;
  }
}

if (count > 1) {
  repeats.push([start, str.length-1]);
}

console.log(repeats);