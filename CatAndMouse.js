function CatAndMouse(x, y, z) {
  let catUnitA = z - x;
  let catUnitB = z - y;
  let returnUnit = "";

  if (catUnitA < 0 && catUnitB < 0) {
    if (catUnitA > catUnitB) {
      returnUnit = "Cat A";
    } else if (catUnitA < catUnitA) {
      returnUnit = "Cat B";
    } else {
      returnUnit = "Mouse C";
    }
  } else {
    if (Math.abs(catUnitA) > Math.abs(catUnitB)) {
      returnUnit = "Cat B";
    } else if (Math.abs(catUnitA) < Math.abs(catUnitB)) {
      returnUnit = "Cat A";
    } else {
      returnUnit = "Mouse C";
    }
  }
  return returnUnit;
}
const catA = 1;
const catB = 3;
const mouseC = 2;
const Catch = CatAndMouse(catA, catB, mouseC);
console.log(Catch);
