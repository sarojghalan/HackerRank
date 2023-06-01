function SequenceEquation(p: number[]): number[] {
  const newArr: number[] = [0, ...p];
  console.log(newArr);
  const ans: number[] = [];
  for (let i = 1; i < newArr.length; i++) {
    // checking index i in newArr
    const numX: number = newArr.indexOf(i);
    console.log(numX);
    // inserting numX into the same newArr
    const numY: number = newArr.indexOf(numX);
    console.log(numY);
    ans.push(numY);
  }
  return ans;
}

const array: number[] = [5, 4, 3, 2, 1];
const result: number[] = SequenceEquation(array);
