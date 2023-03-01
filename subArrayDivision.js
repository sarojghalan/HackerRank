function countPartial(arr, d, m) {
    let satisfyD = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < m; j++) {
        sum += arr[i + j];    
      }
      if (sum == d) {
        satisfyD++;
      }
      sum = 0;
    }
    console.log("am i satisfy", satisfyD);
  }
  let result = countPartial([1, 2, 1, 3, 2], 3, 2);
  