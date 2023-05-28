const modalBtn = document.querySelector(".modal-btn");
const modalContainer = document.querySelector(".modal-container");
const closeOverlay = document.querySelector(".close-overlay");
const modalMessage = document.querySelector(".modal__message");
const modalClass = modalContainer.classList;

modalBtn.addEventListener("click", function () {
  modalClass.toggle("visible");
  modalMessage.style.display = "block";
});

closeOverlay.addEventListener("click", function () {
  modalClass.remove("visible");
  modalMessage.style.display = "none";
});

modalContainer.addEventListener("mouseover", function (e) {
  const target = e.target.style;
  target.cursor = "pointer";
});

modalContainer.addEventListener("click", function () {
  modalClass.toggle("visible");
  modalMessage.style.display = "none";
});
