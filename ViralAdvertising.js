function ViralAdvertising(n) {
  let totalDays = 5;
  let count = 0;
  let viewer = 0;
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      count = Math.floor(totalDays / 2);
    } else {
      console.log("total days ", totalDays);
      viewer = Math.floor(totalDays / 2) * 3;
      totalDays = viewer;
      console.log("viewer", viewer);
      count = count + Math.floor(totalDays / 2);
      console.log("count", count);
    }
  }
  return count;
}
const day = 5;
const result = ViralAdvertising(day);
