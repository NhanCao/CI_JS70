function checkNumber() {
  let num01 = document.getElementById("number01");
  let num02 = document.getElementById("number02");
  let container = document.getElementById("container");
  let num01Temp = parseInt(num01.value);
  let num02Temp = parseInt(num02.value);
  let output = 0;
  /*Kiểm tra xem số nhập vào hợp lệ không*/
  if (num01.value.length == 0 || num02.value.length == 0) {
    alert("Vui lòng nhập vào số cần tìm");
    return false;
  } else if (isNaN(num01.value) || isNaN(num02.value)) {
    alert("Vui lòng nhập đúng giá trị");
    row.value = null;
    column.value = null;
    return false;
  } else if (num01Temp <= 1 || num02Temp <= 1) {
    alert("Vui lòng nhập đúng giá trị");
    return false;
  } else {
    if (num01Temp < num02Temp) {
      for (let i = num01Temp; i <= num02Temp; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            flag++;
          }
        }
        if (flag == 0) {
          output += i + " ";
        }
      }
    } else if (num01Temp > num02Temp) {
      for (let i = num02Temp; i <= num01Temp; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            flag++;
          }
        }
        if (flag == 0) {
          output += i + " ";
        }
      }
    } else {
      for (let i = num01Temp; i <= num01Temp; i++) {
        if (num01Temp % 2 != 0) {
          output += i + " ";
        } else {
          output = "Số bạn nhập không phải số nguyên tố";
        }
      }
    }
  }
  container.innerHTML =
    "Số nguyên tố cần tìm là :" + output.toString().replace("0", "");
}
function Clear() {
  document.getElementById("number01").value = null;
  document.getElementById("number02").value = null;
  document.getElementById("container").innerHTML = "";
}
