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
  JSON.stringify(capitalizeWord("pumpkin")),
  JSON.stringify(toTitleCase("pumpkin pranced purposefully across the pond")),
]);

function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  return str
    .split(" ")
    .map((el) => capitalizeWord(el))
    .join(" ");
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
