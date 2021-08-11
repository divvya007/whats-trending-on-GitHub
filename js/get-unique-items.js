function uniqueItems(arrayOfData) {
  let myArray = arrayOfData;
  console.log(myArray);
  let uniqueArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (uniqueArray.includes(myArray[i])) {
      continue;
    }
    if (myArray[i] === null) {
      continue;
    } else {
      uniqueArray.push(myArray[i]);
    }
  }
  console.log(uniqueArray);
}
