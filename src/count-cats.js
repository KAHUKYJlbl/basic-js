const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(yard) {
  if (yard.length !== 0) {
    let kebab = yard.reduce( (a, b) => a.concat(b) );
    let catsKebab = kebab.filter(isCat => isCat === '^^');
    return catsKebab.length;
  }
  return 0;
}

// countCats([]);

module.exports = {
  countCats
};
