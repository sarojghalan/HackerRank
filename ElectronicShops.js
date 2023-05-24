function ElectronicShop(keyboards, drives, b) {
  let totalPriceArray = [];
  // calculating the sum price of both through iteration of arr1
  for (let i = 0; i < keyboards.length; i++) {
    // getting the number below budget for each one keyboard and usb
    let totalArray = drives
      .map((item) => item + keyboards[i])
      .filter((item) => item <= b);
    totalPriceArray = totalPriceArray.concat(totalArray);
  }
  let maxBudget =
    totalPriceArray.length === 0 ? -1 : Math.max(...totalPriceArray);
  console.log(maxBudget);
  return;
}
const arr1 = [3, 1];
const arr2 = [5, 2, 8];
const budget = 10;
const Shop = ElectronicShop(arr1, arr2, budget);
