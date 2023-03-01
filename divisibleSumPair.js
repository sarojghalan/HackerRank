function divisibleSum(arr,d){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length;j++){
        let sum = 0;
        if(i<j){
          sum = arr[i] + arr[j]
          if(sum%d === 0){
            count++
          }
        }
      }
    }
    return count;
  }
  console.log(divisibleSum([1, 3, 2, 6, 1, 2],3))