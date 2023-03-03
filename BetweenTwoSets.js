function getMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
function getMin(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
function ifExist(array, item) {
  if (array.includes(item)) {
    return true;
  }
  return false;
}
function getCommonElementCount(array1, array2) {
  let count = 0;
  let common = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      count++;
      common.push(array1[i]);
    }
  }
  return count;
}
function getTotalX(a, b) {
  let range = [getMax(a), parseInt(getMin(b))];
  let divisibleByA = [];
  let BisDivisible = [];
  for (let i = range[0]; i <= range[1]; i++) {
    let status = true;
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) {
        status = false;
      }
    }
    if (status) {
      if (!ifExist(divisibleByA, i)) {
        divisibleByA.push(i);
      }
    }
  }
  console.log(divisibleByA);
  for (let i = range[0]; i <= range[1]; i++) {
    let status = true;
    for (let j = 0; j < b.length; j++) {
      if (b[j] % i !== 0) {
        status = false;
      }
    }
    if (status) {
      if (!ifExist(BisDivisible, i)) {
        BisDivisible.push(i);
      }
    }
  }
  return getCommonElementCount(divisibleByA, BisDivisible);
}
