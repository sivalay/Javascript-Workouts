// Program to do the flat method in Javascript.
const theValues = [1, 2, [4, 3, [5, 6]]];
function convertToArr(arr) {
  let c = arr.flat(Infinity);
  console.log(...c);
}
// convertToArr(theValues);

// Convert the Zeros to the end

const testList = [2, 4, 7, 0, 21, 3, 0, 3, 0];

function swapZeroToEnd(arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.push(arr[i]);
      arr.splice(i, 1);
    }
    string += arr[i];
  }
  console.log(string);
}
// swapZeroToEnd(testList);

// Program to convert Zero to the end of a string

// const testString = [2, 4, 7, 0, 21, 3, 0, 3, 0];
const testString = 24702130320;

function convertZeroToEnd(arr) {
  let string = '';
  const stringToString = arr.toString();
  const array = Array.from(stringToString);
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      array.push(array[i]);
      array.splice(i, 1);
    }
  }
  for (let i = 0; i < array.length; i++) {
    string += array[i];
  }
  console.log(string);
}

convertZeroToEnd(testString);

// to count the positive numbers
arr = [1, -2, 3, 4];
function countPositiveNumbers(arr) {
  count = 0;
  arr.forEach((value) => {
    if (value >= 0) {
      count++;
    }
  });
  console.log(count);
}
countPositiveNumbers(arr);
