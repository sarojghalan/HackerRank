function Grading(arr) {
    let updateDiff = 0;
    let updateArr = [];
    for (let i = 0; i < arr.length; i++) {
      // index value lai katera arko le hannu paryo
      updateDiff = Math.ceil(arr[i] / 5) * 5 - arr[i];
      console.log(updateDiff);
      if (arr[i] >= 40) {
        if (updateDiff < 3) {
          updateArr.push(Math.ceil(arr[i] / 5) * 5);
          console.log("if", updateArr);
        } else {
          updateArr.push(arr[i]);
          console.log("else", updateArr);
        }
      } else {
        updateArr.push(arr[i]);
        console.log("no",arr[i])
      }
    }
    console.log("done", updateArr)
  }
  
  let result = Grading([45, 60, 88, 42, 63, 24]);
  // less than 3 xa vani 5 ko multiple hunxa
  // greater or equal 3 bhayo vani baddain
  // below 40 bho vani fail
  