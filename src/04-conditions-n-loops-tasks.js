/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules.
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

/**
 * Returns the factorial of the specified integer n.
 */
function getFactorial(n) {
  return n === 0 ? 1 : n * getFactorial(n - 1);
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 */
function getSumBetweenNumbers(n1, n2) {
  const start = Math.min(n1, n2);
  const end = Math.max(n1, n2);
  return ((end - start + 1) * (start + end)) / 2;
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c.
 */
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 */
function doRectanglesOverlap(rect1, rect2) {
  return !(rect1.left + rect1.width < rect2.left
           || rect2.left + rect2.width < rect1.left
           || rect1.top + rect1.height < rect2.top
           || rect2.top + rect2.height < rect1.top);
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 */
function isInsideCircle(circle, point) {
  const dx = circle.center.x - point.x;
  const dy = circle.center.y - point.y;
  return (dx * dx + dy * dy) < (circle.radius * circle.radius);
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 */
function findFirstSingleChar(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

/**
 * Returns the string representation of math interval.
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  return `${isStartIncluded ? '[' : '('}${start}, ${end}${isEndIncluded ? ']' : ')'}`;
}

/**
 * Reverse the specified string.
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number.
 */
function reverseInteger(num) {
  return parseInt(num.toString().split('').reverse().join(''), 10) * Math.sign(num);
}

/**
 * Validates the CCN (credit card number) using Luhn's algorithm.
 */
function isCreditCardNumber(ccn) {
  const digits = (`${ccn}`).split('').reverse().map(Number);
  const checksum = digits.reduce((sum, digit, index) => {
    if (index % 2 !== 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    return sum + digit;
  }, 0);
  return checksum % 10 === 0;
}

/**
 * Returns the digital root of integer.
 */
function getDigitalRoot(num) {
  return num < 10 ? num : getDigitalRoot(num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0));
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 */
function isBracketsBalanced(str) {
  const stack = [];
  const brackets = {
    '(': ')', '{': '}', '[': ']', '<': '>',
  };
  for (const char of str) {
    if (brackets[char]) stack.push(brackets[char]);
    else if (Object.values(brackets).includes(char)) {
      if (stack.pop() !== char) return false;
    }
  }
  return stack.length === 0;
}

/**
 * Returns the string with n-ary representation of specified number.
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 */
function getCommonDirectoryPath(pathes) {
  if (pathes.length === 0) return '';
  const splitPaths = pathes.map((path) => path.split('/'));
  let commonPath = '';
  for (let i = 0; i < splitPaths[0].length; i++) {
    const currentPart = splitPaths[0][i];
    if (splitPaths.every((path) => path[i] === currentPart)) {
      commonPath += `${currentPart}/`;
    } else {
      break;
    }
  }
  return commonPath;
}

/**
 * Returns the product of two specified matrices.
 */
function getMatrixProduct(m1, m2) {
  return m1.map((row) => m2[0].map((_, colIndex) => row.reduce((sum, elem, rowIndex) => sum + elem * m2[rowIndex][colIndex], 0)));
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 */
function evaluateTicTacToePosition(position) {
  const lines = [
    // Horizontal Lines
    [position[0][0], position[0][1], position[0][2]],
    [position[1][0], position[1][1], position[1][2]],
    [position[2][0], position[2][1], position[2][2]],
    // Vertical Lines
    [position[0][0], position[1][0], position[2][0]],
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    // Diagonal Lines
    [position[0][0], position[1][1], position[2][2]],
    [position[0][2], position[1][1], position[2][0]],
  ];

  for (const line of lines) {
    if (line[0] && line[0] === line[1] && line[1] === line[2]) {
      return line[0];
    }
  }
  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
