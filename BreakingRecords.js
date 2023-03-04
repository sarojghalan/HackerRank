function breakingRecords(scores) {
  let highestCount = 0;
  let lowestCount = 0;
  let highestRecord = scores[0];
  let lowestRecord = scores[0];
  //iterating over every element
  for (let i = 1; i < scores.length; i++) {
    if (scores[i]<lowestRecord) {
        console.log("i am there or not : ",scores[i])
      if (lowestRecord === 0) {
        lowestRecord = scores[i];
        lowestCount++;
      }else if(lowestRecord === scores[i]){
        lowestRecord = lowestRecord;
      }else{
        lowestCount++;
        lowestRecord = scores[i];
      }
    }else{
        if(scores[i] === highestRecord){
            highestCount = highestCount
        }
        if(scores[i]>highestRecord){
            highestCount++;
            highestRecord=scores[i]
        }
    }
  }
  return [highestCount,lowestCount]
}
let result = breakingRecords([10, 5, 20 ,20, 4, 5, 2, 25, 1]);
console.log(result)