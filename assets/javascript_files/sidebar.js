const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const controlBtn = document.querySelector(".control-btn");
const classList = sidebar.classList;

controlBtn.addEventListener("click", function () {
  classList.toggle("show-sidebar");
  sidebar.style.zIndex = 1;
});

closeBtn.addEventListener("click", function () {
  classList.remove("show-sidebar");
});
