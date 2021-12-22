const container = document.getElementById("container");
window.onload = function numberOneTriangle() {
  let index = "";
  for (let i = 0; i < 5; i++) {
    index += 1;
    const p01 = document.createElement("p");
    p01.innerHTML += index;
    container.appendChild(p01);
  }
};
