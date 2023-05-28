const performer = document.querySelector(".counter__performer");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const classList = e.currentTarget.classList;
    if (classList.contains("decrease")) {
      count--;
    } else if (classList.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      performer.style.color = "green";
    }
    if (count < 0) {
      performer.style.color = "red";
    }
    if (count === 0) {
      performer.style.color = "#000";
    }
    performer.textContent = count;
  });
});
