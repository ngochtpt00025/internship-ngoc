
// Mobile Navigation Functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    console.log('Mobile nav elements:', {
        mobileMenuToggle,
        mobileNav,
        mobileNavOverlay,
        mobileCloseBtn
    });

    // Open mobile menu
    function openMobileMenu() {
        console.log('Opening mobile menu');
        if (mobileMenuToggle) mobileMenuToggle.classList.add('active');
        if (mobileNav) mobileNav.classList.add('active');
        if (mobileNavOverlay) mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close mobile menu
    function closeMobileMenu() {
        console.log('Closing mobile menu');
        if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
        if (mobileNav) mobileNav.classList.remove('active');
        if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Mobile menu toggle clicked');
            if (mobileNav && mobileNav.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    } else {
        console.log('Mobile menu toggle not found');
    }

    // Close mobile menu when clicking close button
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu when clicking overlay
    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu when clicking nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu when window is resized to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // Handle escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});