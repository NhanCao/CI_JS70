function createTable() {
  let row = document.getElementById("row");
  let column = document.getElementById("column");
  let container = document.getElementById("container");

  if (row.value.length == 0 || column.value.length == 0) {
    alert("Vui lòng nhập vào số dòng và số cột");
    return false;
  } else if (isNaN(row.value) || isNaN(column.value)) {
    alert("Vui lòng nhập giá trị số cho số dòng và số cột");
    row.value = null;
    column.value = null;
    return false;
  } else {
    let countRow = parseInt(row.value);
    let countColumn = parseInt(column.value);
    let tagTable = document.createElement("table");
    tagTable.border = 2;
    for (let i = 0; i < countRow; i++) {
      let tagRow = document.createElement("tr");
      tagTable.appendChild(tagRow);
      for (let j = 0; j < countColumn; j++) {
        let tagColumn = document.createElement("td");
        let textNode = document.createTextNode(i + j);
        tagColumn.appendChild(textNode);
        tagRow.appendChild(tagColumn);
      }
    }
    container.appendChild(tagTable);
    return true;
  }
}
function Clear() {
  document.getElementById("row").value = null;
  document.getElementById("column").value = null;
  document.getElementById("container").innerHTML = "";
}
