const result = document.getElementById("result");
// result.textContent = JSON.stringify(getSaleItems(products));
result.insertAdjacentHTML("afterend", [
  JSON.stringify(validTime("13:58")),
  JSON.stringify(validTime("25:51")),
  JSON.stringify(validTime("02:76")),
]);

function validTime(str) {
  //  write code here.
  const strProcesed = str.split(":");
  return parseInt(strProcesed[0]) < 0 ||
    parseInt(strProcesed[0]) > 23 ||
    parseInt(strProcesed[1]) < 0 ||
    parseInt(strProcesed[1]) > 60
    ? false
    : true;
}
