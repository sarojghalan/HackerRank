function countPairs(array) {
  // Initialize an empty object to store the count of each element
  const countObj = {};

  // Iterate through the array and update the countObj
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    // If the element is already in countObj, increment its count by 1
    if (countObj[element]) {
      countObj[element]++;
    } else {
      // Otherwise, initialize its count to 1
      countObj[element] = 1;
    }
  }
  console.log(countObj);

  let pairs = 0;

  // Iterate through the countObj and calculate the number of pairs
  for (const key in countObj) {
    if (countObj.hasOwnProperty(key)) {
      const count = countObj[key];

      // Divide the count by 2 and take the integer part
      const pairCount = Math.floor(count / 2);

      // Add the pair count to the total pairs
      pairs += pairCount;
    }
  }

  return pairs;
}

const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const pairCount = countPairs(array);

console.log(pairCount); // Output: 4
