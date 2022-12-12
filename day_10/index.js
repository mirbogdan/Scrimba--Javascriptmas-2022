/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

const result = document.getElementById("result");
// result.textContent = JSON.stringify(getSaleItems(products));
result.insertAdjacentHTML("afterend", [
  JSON.stringify(sortByLength(["abc", "", "aaa", "a", "zz"])),
]);

function sortByLength(strs) {
  //  write code here.
  return strs.sort((a, b) => a.length - b.length);
}
