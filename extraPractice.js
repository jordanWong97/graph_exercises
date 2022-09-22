/** Check if brackets are balanced with recursion.
 *
 * '[hello[ hi{} ]]'
*/
function balancedBrackets(string, openBrackets=[], closedBrackets=[]) {

  openList = '[{(';
  closedList = ']})';
  if (openList.includes(string[0])) openBrackets.push(string[0]);
  if (closedList.includes(string[0])) closedBrackets.push(string[0]);

  balancedBrackets(string.slice(1), openBrackets, closedBrackets)

  if(string.length === 0)
   return openBrackets.length === 0 & closedBrackets === 0;
}