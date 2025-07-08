// Program to do the flat method in Javascript.
const theValues = [1, 2, [4, 3, [5, 6]]];
function convertToArr(arr) {
  let c = arr.flat(Infinity);
  console.log(...c);
}
convertToArr(theValues);

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

swapZeroToEnd(testList);
