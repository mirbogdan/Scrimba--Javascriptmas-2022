/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

const result = document.getElementById("result");
// result.textContent = JSON.stringify(getSaleItems(products));
result.insertAdjacentHTML(
  "afterend",
  JSON.stringify(
    altCaps("When you visit Portland you have to go to VooDoo Donuts")
  )
);

function altCaps(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
  }
  console.log(newStr);
  return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
