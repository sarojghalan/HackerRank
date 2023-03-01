function countApplesAndOranges(s ,t , a ,b ,apples , oranges){
    // first array adding with a value
    let sumA = [];
    let sumB = [];
    let countA = 0;
    let countB = 0;
    for(let i = 0;i < apples.length;i++){
      sumA.push(apples[i]+a)
      if(sumA[i] >= s && sumA[i] <= t ){
        countA++
      }
    };
    for(let i = 0;i < oranges.length;i++){
      sumB.push(oranges[i]+b);
      if(sumB[i] >= s && sumB[i] <= t ){
        countB++
      }
    };
  
  console.log(countA);
  console.log(countB);
  };
  
  let result = countApplesAndOranges(7 ,12,5,7,[-2,2,12],[15,8,6]);