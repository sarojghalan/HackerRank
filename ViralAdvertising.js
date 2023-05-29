function ViralAdvertising(n) {
  let totalDays = 5;
  let count = 0;
  let viewer = 0;
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      // as per question first day count will be total days by 2
      count = Math.floor(totalDays / 2);
    } else {
      // as per question second day it will be share to 3 people by each like person
      viewer = Math.floor(totalDays / 2) * 3;
      // setting totalDays , accordingly to viewer
      totalDays = viewer;
      //adding count 
      count = count + Math.floor(totalDays / 2);
    }
  }
  return count;
}
const day = 5;
const result = ViralAdvertising(day);
