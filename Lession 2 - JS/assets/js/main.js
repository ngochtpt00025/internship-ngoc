const imageUrl = [
  "./assets/images/img-1.jpg",
  "./assets/images/img-2.jpg",
  "./assets/images/img-3.jpg",
  "./assets/images/img-4.jpg",
  "./assets/images/img-5.jpg",
  "./assets/images/img-6.jpg",
];

const sliderContainer = document.querySelector(".slider-container");
let currentIndex = 1;
let slideWidth = 0;
let animating = false;

function next() {
  currentIndex++;
  goTo(currentIndex);
}
function prev() {
  currentIndex--;
  goTo(currentIndex);
}

function renderSlide() {
  sliderContainer.innerHTML = "";
  //clone last slide
  sliderContainer.appendChild(
    makeSlide(imageUrl[imageUrl.length - 1], "clone"));
  //create real sldie
  imageUrl.forEach((src, i) => sliderContainer.appendChild(makeSlide(src)));
  //clone 1st slide
  sliderContainer.appendChild(makeSlide(imageUrl[0], "clone"));
  updateSize
  translate(currentIndex, false);
}
function makeSlide(src, cls) {
  const slide = document.createElement("img");
  slide.src = src;
  slide.className = `slider-item ${cls ? cls : ''}`;
  return slide;
}
function updateSize() {
  const viewPort = document.querySelector('slider');
  slideWidth = viewPort.clientWidth;
  Array.from(sliderContainer.children).forEach(s => s.style.flex = `0 0 ${slideWidth}px`)
}
function translate(i, trans = true) {
  console.log(currentIndex);

  sliderContainer.style.transition = trans ?  "transform 500ms ease" : "";
  sliderContainer.style.transform = `translateX(${-i * 100}%)`;
}

function goTo(index) {
  if (animating) {
    return;
  }
  console.log("go to called");

  animating = true;
  currentIndex = index;
  translate(currentIndex);
  const onEnd = () => {
    sliderContainer.removeEventListener("transitionend", onEnd);
    if (index === 0) {
      currentIndex = imageUrl.length;
      translate(currentIndex, false);
    }
    if (index === imageUrl.length + 1) {
      currentIndex = 1;
      translate(currentIndex, false);
    }
    animating = false;
  };
  sliderContainer.addEventListener("transitionend", onEnd);
  setCurrentIndexColor(currentIndex);
}

const renderSliderPagination = () => {
  const sliderPagination = document.querySelector(".slider-pagination");
  imageUrl.forEach((url, index) => {
    sliderPagination.innerHTML += `
            <span class="page-item" id="${index}">${index + 1}</span>
        `;
  });
};

function setCurrentIndexColor(index) {
  document.querySelectorAll(".page-item").forEach((page) => {
    page.classList.remove("active");
  });
  let i = index > 0 ? index - 1 : 0;
  document.getElementById(`${i}`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  renderSlide();
  renderSliderPagination();
  setCurrentIndexColor(currentIndex);

  document
    .getElementById("slider-control-prev")
    .addEventListener("click", prev);
  document
    .getElementById("slider-control-next")
    .addEventListener("click", next);
});
