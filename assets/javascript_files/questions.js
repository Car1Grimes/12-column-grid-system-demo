const questions = document.querySelectorAll(".single-question");

window.addEventListener("DOMContentLoaded", function () {});

questions.forEach(function (question) {
  const btns = question.querySelectorAll(".question-btn");
  let questionBody = question.querySelector(".question__body");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      questions.forEach(function (arg) {
        let argQuestionBody = arg.querySelector(".question__body");
        if (arg !== question) {
          arg.classList.remove("show-answer");
          argQuestionBody.classList.remove("border--bottom");
        }
      });
      question.classList.toggle("show-answer");
      questionBody.classList.toggle("border--bottom");
    });
  });
});
