// getting all alphabet
function getAllAlphabets() {
  var alphabets = "";
  for (var j = 97; j <= 122; j++) {
    alphabets += String.fromCharCode(j); // Lowercase letters (a-z)
  }
  return alphabets;
}

function DesignerPDFViewer(h, word) {
  // alphabet from a - z
  const alphabets = getAllAlphabets();
  let temp = [];
  for (let i = 0; i < h.length; i++) {
    // checking if word includes the alphabetic characters
    // if includes then pushing value into temp array
    if (word.includes(alphabets[i])) {
      temp.push(h[i]);
    }
  }
  // finding max height from temp array
  let maxHeight = Math.max(...temp);
  //calculating area of rectangle with Max height and length of word
  let rectangleArea = maxHeight * word.length;
  return rectangleArea;
}
const word = "zbca";
const array = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];
const designer = DesignerPDFViewer(array, word);
