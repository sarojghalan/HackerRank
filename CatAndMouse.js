function CatAndMouse(x, y, z) {
  let A = Math.abs(z - x);
  let B = Math.abs(z - y);
  return A < B ? "Cat A" : A > B ? "Cat B" : "Mouse C";
}
//   // Calculating the distances between the cats and the mouse
//   let catUnitA = z - x;
//   let catUnitB = z - y;
//   let returnUnit = "";

//   // if both are negative then validating with 0 to return accordingly
//   if (catUnitA < 0 && catUnitB < 0) {
//     if (catUnitA > catUnitB) {
//       returnUnit = "Cat A";
//     } else if (catUnitA < catUnitA) {
//       returnUnit = "Cat B";
//     } else {
//       returnUnit = "Mouse C";
//     }
//   } else {
//     // what if one of these value are positive and negative
//     // converting cat unit into positive, because unit travel will be same negative positive wont matter if only one of those are negative
//     if (Math.abs(catUnitA) > Math.abs(catUnitB)) {
//       returnUnit = "Cat B";
//     } else if (Math.abs(catUnitA) < Math.abs(catUnitB)) {
//       returnUnit = "Cat A";
//     } else {
//       returnUnit = "Mouse C";
//     }
//   }
//   return returnUnit;
// }
const catA = 1;
const catB = 3;
const mouseC = 2;
const Catch = CatAndMouse(catA, catB, mouseC);
console.log(Catch);
