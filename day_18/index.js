function candies(children, candy) {
  //  write code here.
  return Math.floor(candy / children) * children;
}

const section = document.querySelector("#result");

section.insertAdjacentHTML("afterend", [JSON.stringify(candies(3, 10))]);
