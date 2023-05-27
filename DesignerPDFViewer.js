function getAllAlphabets() {
  var alphabets = "";
  for (var j = 97; j <= 122; j++) {
    alphabets += String.fromCharCode(j); // Lowercase letters (a-z)
  }
  return alphabets;
}

function DesignerPDFViewer(h, word) {
  let temp = [];
  for (let i = 0; i < h.length; i++) {
    if (word.includes(getAllAlphabets()[i])) {
      temp.push(h[i]);
    }
  }
  let rectangleArea = Math.max(...temp) * word.length;
  console.log(rectangleArea);
  return;
}
const word = "zbca";
const array = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];
const designer = DesignerPDFViewer(array, word);
