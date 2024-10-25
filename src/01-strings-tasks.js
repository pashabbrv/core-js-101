/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1 - First string value.
 * @param {string} value2 - Second string value.
 * @return {string} - The concatenated result.
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}

/**
 * Returns the length of given string.
 *
 * @param {string} value - The input string.
 * @return {number} - The length of the string.
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 *
 * @param {string} firstName - First name.
 * @param {string} lastName - Last name.
 * @return {string} - Greeting string.
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value - The template string.
 * @return {string} - Extracted name.
 */
function extractNameFromTemplate(value) {
  return value.slice(7, -1);
}

/**
 * Returns a first char of the given string.
 *
 * @param {string} value - The input string.
 * @return {string} - The first character.
 */
function getFirstChar(value) {
  return value.charAt(0);
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value - The input string.
 * @return {string} - Trimmed string.
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value - The input string.
 * @param {number} count - The number of repetitions.
 * @return {string} - The repeated string.
 */
function repeatString(value, count) {
  return value.repeat(count);
}

/**
 * Remove the first occurrence of string inside another string.
 *
 * @param {string} str - The main string.
 * @param {string} value - The string to remove.
 * @return {string} - The result string.
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

/**
 * Remove the first and last angle brackets from tag string.
 *
 * @param {string} str - The tag string.
 * @return {string} - The string without angle brackets.
 */
function unbracketTag(str) {
  return str.slice(1, -1);
}

/**
 * Converts all characters of the specified string into the upper case.
 *
 * @param {string} str - The input string.
 * @return {string} - The upper case string.
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons.
 *
 * @param {string} str - The input string with email addresses.
 * @return {Array<string>} - Array of email addresses.
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @return {string} - The string representation of the rectangle.
 */
function getRectangleString(width, height) {
  const top = '┌' + '─'.repeat(width - 2) + '┐\n';
  const middle = '│' + ' '.repeat(width - 2) + '│\n';
  const bottom = '└' + '─'.repeat(width - 2) + '┘\n';
  return top + middle.repeat(height - 2) + bottom;
}

/**
 * Encode specified string with ROT13 cipher.
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 */
function encodeToRot13(str) {
  return str.replace(/[A-Za-z]/g, (char) => {
    const code = char.charCodeAt(0);
    return String.fromCharCode(((code <= 90 ? 65 : 97) + (code - (code <= 90 ? 65 : 97) + 13) % 26));
  });
}

/**
 * Returns true if the value is string; otherwise false.
 *
 * @param {*} value - The value to check.
 * @return {boolean} - True if value is a string, otherwise false.
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns played card id.
 *
 * @param {string} value - The card value.
 * @return {number} - The index of the card in the deck.
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
