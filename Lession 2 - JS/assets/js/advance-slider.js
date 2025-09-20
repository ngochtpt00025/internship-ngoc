const slides = [
  {
    src: "./assets/images/Rectangle 24.png",
    title: "Inner Peace",
    sub: "01 — Bed Room",
  },
  {
    src: "./assets/images/Rectangle 24.png",
    title: "Scandinavian Joy",
    sub: "02 — Dining Room",
  },
  {
    src: "./assets/images/Rectangle 24.png",
    title: "Sunlight Corner",
    sub: "03 — Living Room",
  },
  {
    src: "./assets/images/Rectangle 24.png",
    title: "Cozy Minimal",
    sub: "04 — Studio",
  },
  {
    src: "./assets/images/Rectangle 24.png",
    title: "Modern Calm",
    sub: "05 — Bedroom",
  },
  {
    src: "./assets/images/Rectangle 24.png",
    title: "Woodland Vibe",
    sub: "06 — Office",
  },
];
var currentIndex = 0;
function renderSliders() {
  const thumbList = document.getElementById("thumbsList");

  slides.forEach((slide) => {
    thumbList.innerHTML += `
        <div class="thumb">
            <img src="${slide.src}" alt="">
        </div>
        `;
  });

  renderPageDot();
}

function renderPageDot() {
  const pagination = document.querySelector(".pagination");

  slides.forEach((slide, idx) => {
    pagination.innerHTML += `
            <span class="page-dot" id="${idx}"></span>
        `;
  });
}

function activePageDot(index) {
  const pageDot = document.getElementById(index);
  const pageDots = document.querySelectorAll('.page-dot');
  pageDots.forEach(dot => {
    dot.classList.remove('active')
    dot.classList.add("inactive")
  })
  pageDot.classList.remove('inactive');
  pageDot.classList.add("active");
}

function renderViewerSlide(index) {
  const img = document.getElementById("mainImg");
  const capIndex = document.getElementById("capIndex");
  const capTitle = document.getElementById("capTitle");

  const slide = slides.find((sl, idx) => index === idx);

  img.src = slide.src;
  capIndex.textContent = slide.sub;
  capTitle.textContent = slide.title;

  activePageDot(index);
}
function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    renderViewerSlide(currentIndex)
    document.getElementById('thumbsList').style.transform = `translateX(-${currentIndex * 100}%)`
}
document.addEventListener("DOMContentLoaded", function () {
  renderSliders();
  renderViewerSlide(0);

  setInterval(nextSlide, 3000);

  document.getElementById('nextBtn').addEventListener('click', nextSlide)
  document.querySelector('.btn-next').addEventListener('click', nextSlide)
});
