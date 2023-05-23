function pageCount(n, p) {
  var pagesFromFront;
  var pagesFromBack;

  if (p % 2 === 0) {
    pagesFromFront = p / 2;
  } else {
    pagesFromFront = (p - 1) / 2;
  }

  if (n % 2 === 0) {
    if (p % 2 === 0) {
      pagesFromBack = (n - p) / 2;
    } else {
      pagesFromBack = (n - p + 1) / 2;
    }
  } else {
    if (p % 2 === 0) {
      pagesFromBack = (n - p - 1) / 2;
    } else {
      pagesFromBack = (n - p) / 2;
    }
  }

  return Math.min(pagesFromFront, pagesFromBack);
}

var minimumPagesToTurn = pageCount(6, 2);
console.log(minimumPagesToTurn); // Output: 1
