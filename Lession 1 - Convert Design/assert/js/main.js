const slides = [
    { src: './assert/images/products/Syltherine.png', title: 'Inner Peace', sub: '01 — Bed Room' },
    { src: './assert/images/products/Leviosa.png', title: 'Scandinavian Joy', sub: '02 — Dining Room' },
    { src: './assert/images/products/Lolito.png', title: 'Sunlight Corner', sub: '03 — Living Room' },
    { src: './assert/images/products/Repira.png', title: 'Cozy Minimal', sub: '04 — Studio' },
    { src: './assert/images/products/Grifo.png', title: 'Modern Calm', sub: '05 — Bedroom' },
    { src: './assert/images/products/Muggo.png', title: 'Woodland Vibe', sub: '06 — Office' }
];
/* ========================= */

const mainImg = document.getElementById('mainImg');
const capTitle = document.getElementById('capTitle');
const capIndex = document.getElementById('capIndex');
const thumbsList = document.getElementById('thumbsList');
const thumbsViewport = document.getElementById('thumbsViewport');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let current = 0;

slides.forEach((s, i) => {
    const t = document.createElement('div');
    t.className = 'thumb' + (i === 0 ? ' active' : ' inactive');
    t.dataset.index = i;
    t.innerHTML = `<img src="${s.src}" alt="thumb-${i}">`;
    t.addEventListener('click', () => goTo(i));
    thumbsList.appendChild(t);
});

function getThumbNodes() {
    return Array.from(thumbsList.querySelectorAll('.thumb'));
}

function renderMain(idx, direction = 'right') {
    const s = slides[idx];
    mainImg.style.transition = 'none';
    mainImg.style.transform = `translateX(${direction === 'right' ? 40 : -40}px) scale(.98)`;
    mainImg.style.opacity = '0';
    setTimeout(() => {
        mainImg.src = s.src;
        capTitle.textContent = s.title;
        capIndex.textContent = s.sub;
        void mainImg.offsetWidth;
        mainImg.style.transition = 'transform .6s cubic-bezier(.2,.9,.2,1), opacity .35s';
        mainImg.style.transform = 'translateX(0) scale(1)';
        mainImg.style.opacity = '1';
    }, 60);
}

function centerActiveThumb() {
    const thumbs = getThumbNodes();
    if (thumbs.length === 0) return;

    const active = thumbs[current];
    const viewportWidth = thumbsViewport.clientWidth;
    const listWidth = thumbsList.scrollWidth;

    // Position active thumb on the left with some padding (20px)
    let translateX = -active.offsetLeft + 8;

    const maxTranslate = 0;
    const minTranslate = Math.min(0, viewportWidth - listWidth); // negative or 0

    if (translateX > maxTranslate) translateX = maxTranslate;
    if (translateX < minTranslate) translateX = minTranslate;

    thumbsList.style.transform = `translateX(${translateX}px)`;
}

function updateActiveThumbs() {
    const thumbs = getThumbNodes();
    thumbs.forEach((el, i) => {
        el.classList.toggle('active', i === current);
        el.classList.toggle('inactive', i !== current);
    });
    centerActiveThumb();
}

function goTo(idx) {
    if (idx === current) return;
    const dir = idx > current ? 'right' : 'left';
    current = idx;
    renderMain(current, dir);
    updateActiveThumbs();
}

function next() {
    const nextIdx = (current + 1) % slides.length;
    goTo(nextIdx);
}
function prev() {
    const prevIdx = (current - 1 + slides.length) % slides.length;
    goTo(prevIdx);
}

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
});

window.addEventListener('load', () => {
    renderMain(0);
    updateActiveThumbs();
    setTimeout(centerActiveThumb, 150);
});

let startX = 0, curTranslate = 0, isDragging = false;
thumbsViewport.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    curTranslate = getCurrentTranslateX();
    isDragging = true;
}, { passive: true });
thumbsViewport.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    thumbsList.style.transition = 'none';
    thumbsList.style.transform = `translateX(${curTranslate + dx}px)`;
}, { passive: true });
thumbsViewport.addEventListener('touchend', () => {
    thumbsList.style.transition = 'transform .45s cubic-bezier(.2,.9,.2,1)';
    const viewportWidth = thumbsViewport.clientWidth;
    const listWidth = thumbsList.scrollWidth;
    let translate = getCurrentTranslateX();
    const maxTranslate = 0;
    const minTranslate = Math.min(0, viewportWidth - listWidth);
    if (translate > maxTranslate) translate = maxTranslate;
    if (translate < minTranslate) translate = minTranslate;
    thumbsList.style.transform = `translateX(${translate}px)`;
    isDragging = false;
});

function getCurrentTranslateX() {
    const st = window.getComputedStyle(thumbsList).transform;
    if (st === 'none') return 0;
    const mat = new DOMMatrixReadOnly(st);
    return mat.m41;
}
