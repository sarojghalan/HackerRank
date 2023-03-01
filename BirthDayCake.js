function BirthCandle(arr) {
  let sortedArray = arr.sort(function (a, b) {
    return a - b;
  });
  let lastElement = 0;
  let totalHighestElement = 0
  //finding last element
  for(let i = 0;sortedArray.length > i;i++){
    lastElement = sortedArray[arr.length -1]
  }
  totalHighestElement = arr.filter(item => item === lastElement).length
  console.log(totalHighestElement)
}

let result = BirthCandle([4, 55, 6, 8, 55, 12]);
// console.log(result);
