(function () {
    window.onscroll = function () {
        var header_navbar = document.querySelector('.navbar-area');
        var sticky = header_navbar.offsetTop;
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add('sticky');
        } else {
            header_navbar.classList.remove('sticky');
        }
        var backToTo = document.querySelector('.scroll-top');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = 'flex';
        } else {
            backToTo.style.display = 'none';
        }
    };

    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos =
            window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (
                refElement.offsetTop <= scrollTopMinus &&
                refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
            ) {
                document.querySelector('.page-scroll').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
    }

    window.document.addEventListener('scroll', onScroll);
    var pageLink = document.querySelectorAll('.page-scroll');
    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    //===== close navbar-collapse when a  clicked
    let navbarTogglerNine = document.querySelector('.navbar-nine .navbar-toggler');
    navbarTogglerNine.addEventListener('click', function () {
        navbarTogglerNine.classList.toggle('active');
    });

    window.sr = ScrollReveal({
        reset: false,
        distance: '50px',
        duration: 1200,
        mobile: false,
        viewFactor: 0.5,
    });

    // Hero
    sr.reveal('.header-content h1', {
        origin: 'top',
    });
    sr.reveal('.header-content p', {
        origin: 'bottom',
        delay: 500,
    });
    sr.reveal('.header-image', {
        origin: 'right',
        delay: 1000,
    });

    // About
    sr.reveal('.about-five-content h2', {
        origin: 'top',
        delay: 1500,
    });
    sr.reveal('.about-five-tab', {
        origin: 'bottom',
        delay: 500,
        viewFactor: 0.0,
    });
    sr.reveal('.about-image-five', {
        origin: 'left',
        delay: 1000,
        viewFactor: 0.0,
    });

    // Services
    sr.reveal('#services .content h2', {
        origin: 'top',
    });
    sr.reveal('#services .content p', {
        origin: 'bottom',
        delay: 500,
    });
    sr.reveal('.single-services', {
        origin: 'bottom',
        delay: 1000,
        interval: 300,
        viewFactor: 0.2,
    });

    // Clients
    sr.reveal('#clients .content h2', {
        origin: 'top',
    });
    sr.reveal('#clients .content p', {
        origin: 'bottom',
        delay: 500,
    });
    sr.reveal('.single-image', {
        origin: 'bottom',
        delay: 1000,
        interval: 300,
    });

    // Contact
    sr.reveal('#contact .col-xl-4', {
        origin: 'top',
    });
    sr.reveal('#contact .col-xl-8', {
        origin: 'bottom',
        delay: 500,
    });

    ('use strict');
})();
