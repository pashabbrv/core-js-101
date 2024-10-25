/**
 * Returns the result of concatenation of two strings.
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}

/**
 * Returns the length of given string.
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 */
function extractNameFromTemplate(value) {
  return value.slice(7, -1);
}

/**
 * Returns a first char of the given string.
 */
function getFirstChar(value) {
  return value.charAt(0);
}

/**
 * Removes a leading and trailing whitespace characters from string.
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 */
function repeatString(value, count) {
  return value.repeat(count);
}

/**
 * Remove the first occurrence of string inside another string
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

/**
 * Remove the first and last angle brackets from tag string
 */
function unbracketTag(str) {
  return str.slice(1, -1);
}

/**
 * Converts all characters of the specified string into the upper case
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 */
function getRectangleString(width, height) {
  const top = '┌' + '─'.repeat(width - 2) + '┐\n';
  const middle = '│' + ' '.repeat(width - 2) + '│\n';
  const bottom = '└' + '─'.repeat(width - 2) + '┘\n';
  return top + middle.repeat(height - 2) + bottom;
}

/**
 * Encode specified string with ROT13 cipher
 */
function encodeToRot13(str) {
  return str.replace(/[A-Za-z]/g, (char) => {
    const code = char.charCodeAt(0);
    return String.fromCharCode(((code <= 90 ? 65 : 97) + (code - (code <= 90 ? 65 : 97) + 13) % 26));
  });
}

/**
 * Returns true if the value is string; otherwise false.
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns playid card id.
 */
function getCardId(value) {
  const deck = [
    'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
    'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
    'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
    'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
  ];
  return deck.indexOf(value);
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
