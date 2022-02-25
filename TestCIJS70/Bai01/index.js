let arrayInput = [];
let arrTemp = [];
let maxNumber;
let number = document.getElementById("numberArray");
let container = document.getElementById("container");

function Add() {
  let inputA = number.value;
  if (inputA.length == 0 || inputA.length == 0) {
    alert("Vui lòng nhập vào số cần tìm");
    return false;
  } else if (isNaN(number.value) || isNaN(number.value)) {
    alert("Vui lòng nhập đúng giá trị");
    number.value = null;
    return false;
  }
  arrayInput.push(inputA);
  number.value = "";
}
function KetQua() {
  if (arrayInput.length <= 1) {
    alert("Bạn chưa thêm phần tử cho mảng");
    return;
  }
  //Lấy ra từng phần tử trong mảng để tính toán
  for (let i = 1; i < arrayInput.length; i++) {
    let b = arrayInput[i] * arrayInput[i - 1];
    arrTemp.push(b);
  }

  maxNumber = arrTemp[0];

  //Thực hiện so sánh tìm tích lớn nhất từ mảng temp lấy từ mảng input
  for (let j = 0; j < arrTemp.length; j++) {
    if (arrTemp[j] > maxNumber) {
      maxNumber = arrTemp[j];
    }
  }

  //xuất ra giá trị kết quả
  container.innerHTML =
    "Mảng bạn vừa nhập là [" +
    arrayInput +
    "]" +
    " <br> " +
    "Kết quả là:" +
    maxNumber;
}
function Clear() {
  number.value = null;
  container.innerHTML = "";
  arrayInput.length = 0;
  arrTemp.length = 0;
  maxNumber = 0;
}
