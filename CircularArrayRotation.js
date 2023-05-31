function CircularArrayRotation(a, k, queries) {
  let updateArray = a;
  let rotatedArray = [];
  // process for last out and first in
  for (let i = 0; i < k; i++) {
    let lastElement = updateArray.pop();
    updateArray.unshift(lastElement);
  }
  let maxElem = queries.pop();
  for (let i = queries[0]; i <= maxElem; i++) {
    rotatedArray.push(updateArray[i]);
  }
  console.log(rotatedArray);
  return rotatedArray;
}

const array = [4, 5, 6];
const totalNumber = 2;
const queries = [0, 1, 2];
const result = CircularArrayRotation(array, totalNumber, queries);
