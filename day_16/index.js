/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

function insertDashes(arr) {
  // write code here
  return arr.split("").join("-").replace("- -", " ");
}

const section = document.querySelector("#result");

section.insertAdjacentHTML("afterend", [insertDashes("aba caba")]);
