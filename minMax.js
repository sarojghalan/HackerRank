function arrSum(arr){
    let sortedArray = arr.sort(function(a, b){return a-b});
    console.log(sortedArray);
    let minimumSum = 0;
    let maximumSum = 0;
    for(let i = 0; i < sortedArray.length; i++){
        // calculating minimum sum
    if( i >= 1){
        console.log("value of i",i)
        minimumSum += sortedArray[i]
    }
    if(i <=sortedArray.length -2){
        maximumSum += sortedArray[i]
    }
    }
    console.log(minimumSum);
    console.log(maximumSum);
};

let result = arrSum([10,12,8,36,4]);
// console.log(result);
