// 1. Write a program that checks if a given number is prime.

function checkPrimeNum(a) {
  const nsqr = Math.sqrt(a);
  if (a <= 1) {
    console.log('False');
    return false;
  } else {
    for (let i = 2; i <= nsqr; i++) {
      if (a % i === 0) {
        console.log('False');
        return false;
      }
    }
    console.log('True');
    return true;
  }
}
// checkPrimeNum(7)

// 2. Write a program that takes a sentence as input and returns the word count.

function wordCount(s) {
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      count++;
    }
  }
  return count;
}
// wordCount('Hello world')

// 3. Write a program that takes a list of integers as input and returns a new list with only the even numbers.

function evenNum(list) {
  let a = list.filter((value) => {
    if (value % 2 == 0) {
      return value;
    }
  });
  console.log(a);
  return a;
}
// evenNum([1, 2, 3, 4, 5, 6])
// evenNum([7, 8, 9, 10, 11, 12])
// evenNum([2, 4, 6, 8, 10])

// 4. Write a program that takes a string as input and returns the frequency of each character in the string.

function findFrequency(string) {
  let list = {};
  let stringList = string.split('');
  for (let i = 0; i < string.length; i++) {
    let count = 0;
    for (let j = 0; j < stringList.length; j++) {
      if (stringList[j] == string[i]) {
        count++;
      }
    }
    list[string[i]] = count;
  }
  return list;
}
// findFrequency('hello')

// 5. Write a program that takes a list of integers as input and returns the sum of all the numbers divisible by 3.

function findSum(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 3 === 0) {
      console.log(list[i], 'numbers');
      sum = sum + list[i];
    }
  }
  return sum;
}
// findSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// 6. Write a program that takes a sentence as input and returns the longest word in the sentence.

function findLongest(string) {
  let largeString = '';
  let a = string.split(' ');
  for (let i = 0; i < a.length; i++) {
    if (a[i].length > largeString.length) {
      largeString = a[i];
    }
  }
  return largeString;
}
// findLongest('Hello world of programming')
// findLongest('I love coding')

// 7. Write a program that determines if a given number is a perfect square. A perfect square is an integer that is equal to the square of another integer.

function perfectSquare(num) {
  if (num <= 0) {
    return false;
  }
  const sqrt = Math.sqrt(num);
  const res = Number.isInteger(sqrt);
  return res;
}
// perfectSquare(16)

// 8. Write a program that takes a list of strings as input and returns the longest word among them.

function longestWord(list) {
  let longest = '';
  for (let i = 0; i < list.length; i++) {
    if (list[i].length > longest.length) {
      longest = list[i];
    }
  }
  return longest;
}
longestWord(['cat', 'dog', 'elephant', 'tiger']);

// ------------Test-Cases------------

function testPrime() {
  let num = 10;
  const expected = true;
  const res = checkPrimeNum(num);

  if (res === expected) {
    console.log('success');
  } else {
    console.log('flop');
  }
}
// testPrime()

function TestCount() {
  const string = 'This is a sample sentence.';
  const expected = 5;
  const res = wordCount(string);

  if (res === expected) {
    console.log('success');
  } else {
    console.log('flop');
  }
}
// TestCount()

function testEven() {
  let list = [1, 2, 3, 4, 5, 6];
  const expected = [2, 4, 6];
  const res = evenNum(list);
  if (JSON.stringify(res) === JSON.stringify(expected)) {
    console.log('success');
  } else {
    console.log('flop');
  }
}
// testEven()

function testFrequency() {
  let word = 'programming';
  let expected = { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 };
  let res = findFrequency(word);
  if (JSON.stringify(res) === JSON.stringify(expected)) {
    console.log('success');
  } else {
    console.log(expected);
    console.log('flop');
  }
}
// testFrequency()

function testNumber() {
  let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const expected = 18;
  const res = findSum(list);
  if (res === expected) {
    console.log('success');
  } else {
    console.log('flop');
  }
}
// testNumber()

function testFindLongest() {
  let text = 'I love coding';
  const expected = 'coding';
  const res = findLongest(text);
  //   let list = ["cat", "dog", "elephant", "tiger"];
  //   let expected = "elephant";
  //   const res = longestWord(list);
  if (res === expected) {
    console.log('success');
  } else {
    console.log('flop');
  }
}
// testFindLongest()

function testPerfectSquare() {
  let number = 16;
  let expected = true;
  let res = perfectSquare(number);
  if (res === expected) {
    console.log('success');
  } else {
    console.log('flop');
  }
}
// testPerfectSquare()

// ------------
function findTheLongest() {
  let list = ['hello', 'welcome', 'coming', 'alternative'];
  let expected = 'alternative';
  let res = longestWord(list);

  if (res === expected) {
    console.log('success');
    console.log(res, 'res');
    console.log(expected, 'expected');
  }
}
