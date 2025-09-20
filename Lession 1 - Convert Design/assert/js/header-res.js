
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

    function openMobileMenu() {
        console.log('Opening mobile menu');
        if (mobileMenuToggle) mobileMenuToggle.classList.add('active');
        if (mobileNav) mobileNav.classList.add('active');
        if (mobileNavOverlay) mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        console.log('Closing mobile menu');
        if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
        if (mobileNav) mobileNav.classList.remove('active');
        if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

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

    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }

    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMobileMenu);
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    const mobileFilterToggle = document.getElementById('mobileFilterToggle');
    const filterContent = document.getElementById('filterContent');
    
    console.log('Mobile Filter Toggle:', mobileFilterToggle);
    console.log('Filter Content:', filterContent);
    
    if (mobileFilterToggle && filterContent) {
        console.log('Both elements found, adding event listener');
        
        mobileFilterToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Filter button clicked!');
            
            filterContent.classList.toggle('show');
            console.log('Filter content classes:', filterContent.classList);
            
            mobileFilterToggle.classList.toggle('active');
            
            if (filterContent.classList.contains('show')) {
                console.log('Showing filter content');
                filterContent.style.display = 'flex';
                setTimeout(() => {
                    filterContent.style.opacity = '1';
                    filterContent.style.transform = 'translateY(0)';
                }, 10);
            } else {
                console.log('Hiding filter content');
                filterContent.style.opacity = '0';
                filterContent.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    if (!filterContent.classList.contains('show')) {
                        filterContent.style.display = 'none';
                    }
                }, 300);
            }
        });
    } else {
        console.log('Elements not found - Toggle:', !!mobileFilterToggle, 'Content:', !!filterContent);
    }   
});