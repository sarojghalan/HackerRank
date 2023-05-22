function DrawingBooks(totalPage, actualPage) {
  console.log(totalPage, actualPage);
  let frontPageCount = 0;
  let backPageCount = 0;
  for (let i = 1; i < totalPage; i++) {
    if (i === actualPage) {
      let frontValue = i;
      let pageChecker = !Number.isInteger((frontValue - 1) / 2);
      console.log(pageChecker);
      frontPageCount = pageChecker
        ? (frontValue - 1) / 2
        : (frontValue) / 2;
    }
  }
  console.log(frontPageCount);
  return;
}

const Test = DrawingBooks(11, 8);
