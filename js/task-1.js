/**
 * @param {Object} products
 * @param {number} containerSize
 * @returns {string[]}
 */
function isEnoughCapacity(products, containerSize) {
  if (!Number.isInteger(containerSize))
    throw new TypeError(
      `Expected Object, and number; got: ${typeof products}, ${typeof containerSize}`
    );

  return (
    Object.values(products).reduce((sum, val) => sum + val, 0) <= containerSize
  );
}

console.log('----- TASK 1 -----');
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
console.log('');
