function AngryProfessor(a, k) {
  // storing smaller than 0 value
  let temp = [];
  for (let i = 0; i < a.length; i++) {
    //checking if array element is smaller than 0
    // if YES , storing value into temp array
    if (a[i] < 0 || a[i] === 0) {
      temp.push(a[i]);
    }
  }
  // returning according to the given criteria, k
  // if greater returning "No" and vice versa
  return temp.length >= k ? "NO" : "YES";
}
const arr = [-2, -1, 0, 1, 2];
const std = 3;
const prof = AngryProfessor(arr, std);
