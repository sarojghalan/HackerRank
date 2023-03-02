const arr = [1, 3, 3, 4, 5, 4, 3, 2, 1, 2, 4];
const output = arr.reduce(function(acc ,curr){
  if(acc[curr]){
      acc[curr] = ++acc[curr]
  }else{
      acc[curr] = 1
  }
  return acc;
},{});
//converting onject into array
const outputArray = Object.entries(output)

//sortung array with string value
const sortedArray = outputArray.sort((a, b) => b[1] - a[1])

// getting first index from that srted array
const result = sortedArray.find(([key, value]) => value === sortedArray[0][1])[0]
console.log(result);