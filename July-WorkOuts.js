// 1.
// Program to do the flat method in Javascript.
const theValues = [1, 2, [4, 3, [5, 6]]];
function convertToArr(arr) {
  let c = arr.flat(Infinity);
  console.log(...c);
}
// convertToArr(theValues);

// 2.
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

// 3.
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

// convertZeroToEnd(testString);

// 4.
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
// countPositiveNumbers(arr);

// 5.
// Using Array Destructuring get all of the names from this Nested Array "const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];"

const students = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

const [student1, [student2, student3], [student4, student5]] = students;

// console.log(student1, student2, student3, student4, student5);

// 6.
// We have an object called 'user'.
// Write the destructuring assignment that reads:
// - 'name' property into the variable 'name'.
// - 'years' property into the variable 'age'.
// - 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
// */

let user = { name: 'Brenda', years: 30 };

let { name, years: age, isAdmin = false } = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);

// 7.
// Count thepositive number on an array

array = [1, -2, 3, 4];

function countPositive(arr) {
  count = 0;
  arr.forEach((value) => {
    if (value >= 0) {
      count += 1;
    }
  });
  console.log(count);
}

countPositive(array);

// 8.
// Reverse a string

const string = 'Welcome';

function reverseString(string) {
  const arrayString = string.split('');
  const newString = [];
  for (let i = arrayString.length - 1; i >= 0; i--) {
    newString.push(arrayString[i]);
  }
  console.log(newString.join(''));
}

reverseString(string);

// 10.
// Replace the charecter of a string.

const str = 'The red cat';

const newStr = str.replace('red', 'blue');
console.log(newStr);

// 11.
// Swap Last and End letters

const swapTestString = 'Hello';

function swapString(str) {
  swapedArray = str.split('');
  const newString = [];
  for (let i = 0; i < swapedArray.length; i++) {
    console.log(swapedArray[i]);
  }
}

swapString(swapTestString);
