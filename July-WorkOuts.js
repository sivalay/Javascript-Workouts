// Program to do the flat method in Javascript.
const theValues = [1, 2, [4, 3, [5, 6]]];
function convertToArr(arr) {
  let c = arr.flat(Infinity);
  console.log(...c);
}
