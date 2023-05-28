let reviewers = [
  {
    avt: "./assets/images/reviewer-1.jpg",
    name: "Alisha Brown",
    job: "DESIGNER",
    saying:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto accusamus eum, distinctio officiis magnam dolore fugiat natus facilis dolores cum beatae hic quasi eaque ipsum cup",
  },
  {
    avt: "./assets/images/reviewer-2.jpg",
    name: "Dominic Toretto",
    job: "PROGRAMMER",
    saying:
      "I live my life a quarter mile at a time. Nothing else matters. Not the mortgage, not the store, not my team and all their bullshit. For those ten seconds or less, I'm free.",
  },
  {
    avt: "./assets/images/reviewer-3.jpg",
    name: "Dwayne Johnson",
    job: "ACTOR",
    saying:
      "I grew up where, when a door closed, a window didn't open. The only thing I had was cracks. I'd do everything to get through those cracks - scratch, claw, bite, push, bleed. Now the opportunity is here. The door is wide open, and it's as big as a garage.",
  },
  {
    avt: "./assets/images/reviewer-4.jpg",
    name: "Elon Musk",
    job: "CEO",
    saying:
      "Starting and growing a business is as much about the innovation, drive and determination of the people who do it as it is about the product they sell.",
  },
];
const avatar = document.querySelector(".reviewer");
const reviewerName = document.querySelector(".reviewer__name");
const job = document.querySelector(".reviewer__job");
const saying = document.querySelector(".reviewer__saying");
const chevronLeft = document.querySelector(".chevron-left");
const chevronRight = document.querySelector(".chevron-right");
const numberOfReviewer = reviewers.length;
let index = 0;
const currentReviewer = reviewers[index];

window.addEventListener("DOMContentLoaded", function () {
  avatar.src = currentReviewer.avt;
  reviewerName.textContent = currentReviewer.name;
  job.textContent = currentReviewer.job;
  saying.textContent = currentReviewer.saying;
});

function changeReviewer(index) {
  let currentReviewer = reviewers[index];
  avatar.src = currentReviewer.avt;
  reviewerName.textContent = currentReviewer.name;
  job.textContent = currentReviewer.job;
  saying.textContent = currentReviewer.saying;
}

chevronLeft.addEventListener("click", function () {
  index++;
  if (index > numberOfReviewer - 1) {
    index = 0;
  }
  changeReviewer(index);
});

chevronRight.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = numberOfReviewer - 1;
  }
  changeReviewer(index);
});
