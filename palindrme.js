// function palidrome(num){
//     let original = num;
//     let reverse = 0;
//     let remainder = 0;

//     while(num !== 0){
//         reverse = num % 10; // 6 3 5 1
//         num = Math.floor(num/10); //153 15 1 0 
//         remainder = remainder * 10 + reverse; // 6 63 635 6351
//     }
//     if(original === remainder){
//         return true;
//     }else{
//         return false;
//     }
// };

// let result = palidrome(1536351);
// console.log(result);

function minusPalidrome(num){
    // console.log(typeof num.toString())
    
    let stringInteger = num.toString();
    let reverse = "";
    for(let i = stringInteger.length - 1;i>=0;i--){
        reverse += stringInteger[i];
        console.log(stringInteger[i]);
    }
    if(stringInteger == reverse){
        return true;
    }else{
        return false;
    }
}
let result = minusPalidrome(12321);
console.log(result)