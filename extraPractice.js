/** Check if brackets are balanced with recursion.
 *
 * '[hello[ hi{} ]]'
 * '[] [] []'
*/
function balancedBrackets(string, unevenBrackets = [], idx = 0) {

  if (idx === string.length) return unevenBrackets.length === 0;
  let openBrackets = {
    '[': ']',
    '{': '}',
    '(': ')'
  };

  let closedBrackets = {
    ']': '[',
    '}': '{',
    ')': '('
  };

  let char = string[idx];
  
  if (openBrackets[char]) {
    unevenBrackets.push(char);
  } else if (closedBrackets[char]) {
    if (unevenBrackets[unevenBrackets.length - 1] === closedBrackets[char]) {
      unevenBrackets.pop();
    } else {
      return false;
    }
  }

  return balancedBrackets(string, unevenBrackets, idx + 1);

}

module.exports = { balancedBrackets };