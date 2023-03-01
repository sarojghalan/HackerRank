function countBird(arr) {

  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    //condition edi tyo element array ma xa vani condition true banauna nadine

    // if(!temp.includes(arr[i])){
    //   console.log("i am there : ",i)
    // }

    // checking value one by one
    
    if(!temp.includes(arr[i])){
    
      for(let j = i+1; j < arr.length; j++) {
        if(arr[i] === arr[j]){
          count++
        }
      }
      // temp.push({`${arr[i]}`:count});
    }
    console.log(count)
  }
  console.log("i am temp : ",temp);
}
countBird([1, 3, 3, 4, 5, 4, 3, 2, 1, 2, 4]);

// countng repeated element
