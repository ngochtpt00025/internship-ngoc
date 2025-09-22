document.addEventListener('DOMContentLoaded', function() {
    const offcanvas = document.getElementById('offcanvasRight');
    const backdrop = document.getElementById('backdrop');
    const closeOffcanvasCart = document.getElementById('close-offcanvas-cart');

    document.getElementById('open-offcanvas-cart').addEventListener('click', function() {
        offcanvas.classList.add('show');
        backdrop.classList.remove('hidden');
        backdrop.classList.add('show');
        document.body.classList.add('no-scroll');
    })

    closeOffcanvasCart.addEventListener('click', function() {
        offcanvas.classList.remove('show');
        backdrop.classList.remove('show');
        backdrop.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    })

    backdrop.addEventListener('click', function() {
        offcanvas.classList.remove('show');
        backdrop.classList.remove('show');
        backdrop.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    })
})