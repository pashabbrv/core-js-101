/* eslint-disable max-len */
/* eslint-disable no-shadow */

/**
 * Returns an index of the specified element in array or -1 if element is not found
 */
function findElement(arr, value) {
  return arr.indexOf(value);
}

/**
 * Generates an array of odd numbers of the specified length
 */
function generateOdds(len) {
  return Array.from({ length: len }, (_, index) => 2 * index + 1);
}

/**
 */
function doubleArray(arr) {
  return arr.concat(arr);
}

/**
 * Returns an array of positive numbers from the specified array in original order
 */
function getArrayOfPositives(arr) {
  return arr.filter((num) => num > 0);
}

/**
 * Returns the array with strings only in the specified array (in original order)
 */
function getArrayOfStrings(arr) {
  return arr.filter((item) => typeof item === 'string');
}

/**
 * Removes falsy values from the specified array
 */
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

/**
 * Returns the array of uppercase strings from the specified array
 */
function getUpperCaseStrings(arr) {
  return arr.map((str) => str.toUpperCase());
}

/**
 * Returns the array of string lengths from the specified string array.
 */
function getStringsLength(arr) {
  return arr.map((str) => str.length);
}

/**
 * Inserts the item into specified array at specified index
 */
function insertItem(arr, item, index) {
  return arr.splice(index, 0, item);
}


/**
 * Returns the n first items of the specified array
 */
function getHead(arr, n) {
  return arr.slice(0, n);
}

/**
 * Returns the n last items of the specified array
 */
function getTail(arr, n) {
  return arr.slice(-n);
}

/**
 * Returns CSV representation of two-dimensional numeric array.
 */
function toCsvText(arr) {
  return arr.map((row) => row.join(',')).join('\n');
}

/**
 * Transforms the numeric array into the according array of squares.
 */
function toArrayOfSquares(arr) {
  return arr.map((num) => num * num);
}

/**
 * Transforms the numeric array to the according moving sum array.
 */
function getMovingSum(arr) {
  return arr.reduce((acc, curr) => {
    const sum = (acc[acc.length - 1] || 0) + curr;
    acc.push(sum);
    return acc;
  }, []);
}

/**
 * Returns every second item from the specified array.
 */
function getSecondItems(arr) {
  return arr.filter((_, index) => index % 2 === 1);
}

/**
 * Propagates every item in sequence its position times.
 */
function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

/**
 * Returns the 3 largest numbers from the specified array.
 */
function get3TopItems(arr) {
  return arr.slice().sort((a, b) => b - a).slice(0, 3);
}

/**
 * Returns the number of positive numbers from specified array.
 */
function getPositivesCount(arr) {
  return arr.filter((num) => typeof num === 'number' && num > 0).length;
}

/**
 * Sorts digit names.
 */
function sortDigitNamesByNumericOrder(arr) {
  const digitNames = [
    'zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine',
  ];
  return arr.slice().sort((a, b) => digitNames.indexOf(a) - digitNames.indexOf(b));
}

/**
 * Returns the sum of all items in the specified array of numbers.
 */
function getItemsSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

/**
 * Returns the number of all falsy values in the specified array.
 */
function getFalsyValuesCount(arr) {
  return arr.filter((item) => !item).length;
}

/**
 * Returns a number of all occurrences of the specified item in an array.
 */
function findAllOccurrences(arr, item) {
  return arr.filter((elem) => elem === item).length;
}

/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 */
function toStringList(arr) {
  return arr.join(',');
}

/**
 */
function sortCitiesArray(arr) {
  return arr.slice().sort((a, b) => {
    if (a.country === b.country) {
      return a.city.localeCompare(b.city);
    }
    return a.country.localeCompare(b.country);
  });
}

/**
 * Creates an identity matrix of the specified size.
 */
function getIdentityMatrix(n) {
  return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
}

/**
 * Creates an array of integers from the specified start to end (inclusive).
 */
function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

/**
 * Returns array containing only unique values from the specified array.
 */
function distinct(arr) {
  return [...new Set(arr)];
}

/**
 * Groups elements of the specified array by key.
 */
function group(array, keySelector, valueSelector) {
  return array.reduce((map, item) => {
    const key = keySelector(item);
    const value = valueSelector(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(value);
    return map;
  }, new Map());
}

/**
 * Projects each element of the specified array to a sequence and flattens the resulting sequences into one array.
 */
function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

/**
 * Returns an element from the multidimensional array by the specified indexes.
 */
function getElementByIndexes(arr, indexes) {
  return indexes.reduce((acc, index) => acc[index], arr);
}

/**
 * Swaps the head and tail of the specified array.
 */
function swapHeadAndTail(arr) {
  const half = Math.floor(arr.length / 2);
  const head = arr.slice(0, half);
  const tail = arr.slice(Math.ceil(arr.length / 2));

  return arr.length % 2 === 0
    ? [...tail, ...head]
    : [...tail, arr[half], ...head];
}


module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
