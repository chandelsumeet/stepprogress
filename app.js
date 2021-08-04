const progessBar = document.getElementById("progress");
let circleList = document.querySelectorAll(".circle");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentActive = 1; // when we start the first circle should be active

nextBtn.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circleList.length) {
    currentActive = circleList.length;
  }
  checkStatus();
  update();
});
prevBtn.addEventListener("click", () => {
  currentActive--;
  console.log("hello worl");
  if (currentActive < 1) {
    currentActive = 1;
    console.log(currentActive);
  }
  checkStatus();
  update();
});

function update() {
  circleList.forEach((circle, idx) => {
    console.log(currentActive, idx);
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  progessBar.style.width =
    ((currentActive - 1) / (circleList.length - 1)) * 100 + "%";
}

function checkStatus() {
  if (currentActive == circleList.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
  if (currentActive == 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
}
