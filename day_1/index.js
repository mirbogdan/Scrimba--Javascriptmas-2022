/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

const result = document.getElementById("result");
result.textContent =
  panic("I'm almost out of coffee") + " & " + panic("winter is coming");
function panic(str) {
  const myArr = str.toUpperCase().split(" ").join(" 😱 ") + "!";

  return myArr;
}

// Test your function
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
