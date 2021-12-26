const App = document.getElementById("app");
//Tao 1 mang de dua cac class vao
const clocks = [];

const title = document.createElement("div");
title.classList.add("title");
title.innerHTML = "Đồng Hồ Bấm Giờ";
App.appendChild(title);

for (let index = 0; index < 5; index++) {
  const clockTime = new TimerClock();
  clocks.push(clockTime);
  App.appendChild(clockTime.Render());
}
const btnStartAll = document.createElement("button");
btnStartAll.classList.add("control");
btnStartAll.innerHTML = "Start All";
btnStartAll.addEventListener("click", () => {
  clocks.forEach((clock) => {
    clock.Start();
  });
});

const btnClearALL = document.createElement("button");
btnClearALL.classList.add("control");
btnClearALL.innerHTML = "Clear All";
btnClearALL.addEventListener("click", () => {
  clocks.forEach((clock) => {
    clock.Stop();
  });
});
App.appendChild(btnStartAll);
App.appendChild(btnClearALL);
