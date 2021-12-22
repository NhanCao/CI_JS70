const btnfind = document.getElementById("btnpFind");
const btnclear = document.getElementById("btnClear");
const numInput = document.getElementById("numberInput");
const result = document.getElementById("container");

const MIN_INPUT = 4;
const MAX_INPUT = 20;
btnfind.addEventListener("click", () => {
  if (isNaN(numInput.value)) {
    alert("Vui lòng nhập đúng giá trị số");
    numInput.value = null;
    return false;
  } else if (numInput.value.length == 0) {
    alert("Vui lòng nhập giá trị");
    numInput.value = null;
    return false;
  } else if (
    parseInt(numInput.value) < MIN_INPUT ||
    parseInt(numInput.value) > MAX_INPUT
  ) {
    alert("Vui lòng nhập giá trị từ " + MIN_INPUT + " đến " + MAX_INPUT + " ");
    numInput.value = null;
    return false;
  }
  let outPut = "";
  let inputValue = parseInt(numInput.value);
  for (let i = 0; i <= inputValue; i++) {
    if (i % 2 == 0) {
      outPut += i + " ";
    }
  }
  result.innerHTML = "Số chẵn cần tìm là : " + outPut;
});
btnclear.addEventListener("click", () => {
  numInput.value = null;
  result.innerHTML = "";
});
