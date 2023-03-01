function kangaroo(x1,v1,x2,v2,arr){
    let meetingPoint = (x2 -x1) %( v1 -v2);
    if(x2 > x1 && v2>v1){
      return "NO";
    }else{
      if(meetingPoint == 0){
        return "YES"
      }else{
        return "NO"
      }
    }
    for(let x of arr){
      console.log(arr[x])
    }
  }
  
  let result = kangaroo(0,3,4,2,[1,2,3,4]);
  console.log(result)