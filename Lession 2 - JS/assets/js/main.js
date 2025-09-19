const imageUrl = [
  "./assets/images/img-1.jpg",
  "./assets/images/img-2.jpg",
  "./assets/images/img-3.jpg",
  "./assets/images/img-4.jpg",
  "./assets/images/img-5.jpg",
  "./assets/images/img-6.jpg",
];
var currentIndex = 0;

function next() {
  console.log("current index: ", currentIndex);

  if (currentIndex < imageUrl.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  renderlide(currentIndex);
}
function prev() {
  console.log("current index: ", currentIndex);
  if (currentIndex >= 0 && currentIndex !== -1) {
    currentIndex--;
  } else {
    currentIndex = imageUrl.length - 1;
  }
  renderlide(currentIndex);
}

function renderlide(index) {
  const sliderContainer = document.querySelector(".slider-container");
  const imgIdx = imageUrl.findIndex((img) => img === imageUrl[index]);
  if (imgIdx !== -1) {
    sliderContainer.innerHTML = `
            <img class="slider-item" src="${imageUrl[imgIdx]}" alt="">
        `;
  }
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
  document.getElementById('').classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  renderlide(currentIndex);
  renderSliderPagination();
  setCurrentIndexColor(0);

  document
    .getElementById("slider-control-prev")
    .addEventListener("click", prev);
  document
    .getElementById("slider-control-next")
    .addEventListener("click", next);
});
