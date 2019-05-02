/**
 * Creates an array with the last value started from 1.
 * @param {number} max 
 */
const range = (max) => {
  return Array(max).fill(null).map((_, index) => index + 1);
}