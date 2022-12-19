function centuryFromYear(num) {
  //  write code here.
  return num % 100 === 0 ? num / 100 : Math.floor(num / 100) + 1;
}

const section = document.querySelector("#result");

section.insertAdjacentHTML("afterend", [
  JSON.stringify(centuryFromYear(1905)),
  JSON.stringify(centuryFromYear(1700)),
]);
