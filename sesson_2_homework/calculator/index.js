import cal from "./cal.js";

const result = document.getElementById("container");
const num01 = document.getElementById("num01");
const num02 = document.getElementById("num02");
const btnplus = document.getElementById("btnplus");
const btnminus = document.getElementById("btnminus");
const btnmulti = document.getElementById("btnmulti");
const btndivide = document.getElementById("btndivide");
var output = 0;

num01.addEventListener("keyup", () => {
  if (isNaN(num01.value)) {
    alert("Vui lòng nhập đúng giá trị số");
    num01.value = null;
    return false;
  }
  if (num01.value.length == 0) {
    result.innerHTML = "";
  }
});
num02.addEventListener("keyup", () => {
  if (isNaN(num02.value)) {
    alert("Vui lòng nhập đúng giá trị số");
    num02.value = null;
    return false;
  }
  if (num02.value.length == 0) {
    result.innerHTML = "";
  }
});
btnplus.addEventListener("click", () => {
  if (num01.value.length == 0 || num02.value.length == 0) {
    result.innerHTML = "Phép tính không hợp lệ!!!!!";
    return false;
  }
  output = cal.add(parseInt(num01.value), parseInt(num02.value));
  result.innerHTML = "Kết quả của phép tính là: " + output;
});

btnminus.addEventListener("click", () => {
  if (num01.value.length == 0 || num02.value.length == 0) {
    result.innerHTML = "Phép tính không hợp lệ!!!!!";
    return false;
  }
  output = cal.minus(parseInt(num01.value), parseInt(num02.value));
  result.innerHTML = "Kết quả của phép tính là: " + output;
});

btnmulti.addEventListener("click", () => {
  if (num01.value.length == 0 || num02.value.length == 0) {
    result.innerHTML = "Phép tính không hợp lệ!!!!!";
    return false;
  }
  output = cal.multi(parseInt(num01.value), parseInt(num02.value));
  result.innerHTML = "Kết quả của phép tính là: " + output;
});

btndivide.addEventListener("click", () => {
  if (
    num01.value.length == 0 ||
    num02.value.length == 0 ||
    parseInt(num02.value) == 0
  ) {
    result.innerHTML = "Phép tính không hợp lệ!!!!!";
    return false;
  }
  output = cal.divide(parseInt(num01.value), parseInt(num02.value));
  result.innerHTML = "Kết quả của phép tính là: " + output;
});
