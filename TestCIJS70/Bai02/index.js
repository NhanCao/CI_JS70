let arrayInput = [];
let arrTemp = [];
let maxNumber;

let array = [];
let team1 = [];
let team2 = [];
let output = [];
let outputTeam1 = 0;
let outputTeam2 = 0;

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
  //Tách mảng đã cho vào 2 mảng con theo yêu cầu đề
  for (let i = 0; i < arrayInput.length; i++) {
    if (i % 2 == 0) {
      team1.push(arrayInput[i]);
    }
    if (i % 2 == 1) {
      team2.push(arrayInput[i]);
    }
  }

  for (let j = 0; j < team1.length; j++) {
    outputTeam1 += parseInt(team1[j]);
  }

  for (let k = 0; k < team2.length; k++) {
    outputTeam2 += parseInt(team2[k]);
  }

  //xuất ra giá trị kết quả
  container.innerHTML =
    "Mảng bạn vừa nhập là [" +
    arrayInput +
    "]" +
    " <br> " +
    "Cân nặng team 01 :" +
    outputTeam1 +
    " <br> " +
    "Cân nặng team 02: " +
    outputTeam2;
}
function Clear() {
  number.value = null;
  container.innerHTML = "";
  arrayInput.length = 0;
  arrTemp.length = 0;
  maxNumber = 0;
}
