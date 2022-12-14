function countVowelConsonant(str) {
  // write code here
  let sum = 0;
  let vowelsArr = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .reduce(
      (acc, current) => (acc += vowelsArr.includes(current) ? 1 : 2),
      sum
    );
}

const section = document.querySelector("#result");

section.insertAdjacentHTML("afterend", [
  JSON.stringify(countVowelConsonant("abcde")),
]);
