function CircularArrayRotation(a, k, queries) {
  let updateArray = a;
  let rotatedArray = [];
  // process of last out and first in
  // rotating it until k is condition is true
  for (let i = 0; i < k; i++) {
    let lastElement = updateArray.pop();
    updateArray.unshift(lastElement);
  }
  //setting queries[i] as first element which is index for update array
  // until loop ends all the queries index will be push to rotated array
  console.log(queries.length);
  for (let i = 0; i <= queries.length - 1; i++) {
    rotatedArray.push(updateArray[queries[i]]);
    console.log();
  }
  console.log(rotatedArray);
  return rotatedArray;
}

const array = [4, 5, 6];
const totalNumber = 2;
const queries = [0, 1, 2];
const result = CircularArrayRotation(array, totalNumber, queries);
