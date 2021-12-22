const container = document.getElementById("container");

container.addEventListener("mouseover", () => {
  container.setAttribute("style", "background-color: #FFA500;");
});
container.addEventListener("mouseout", () => {
  container.setAttribute("style", " background-color: #9932CC;");
});
