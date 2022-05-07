$(document).ready( () => {
    setTimeout(() => {
        const autoType = new Typed('.auto-type', {
            strings: ['a student', 'a web developer', 'a tech enthusiast'],
            typeSpeed: 80,
            backSpeed: 80,
            loop: true
        });
    }, 500);
});

// Home
$(window).on('load', () => {
    $('#home .col-one').addClass('show');
    $('#home .col-two').addClass('show');

    let wScroll = $(this).scrollTop();

    if (wScroll > $('#about').offset().top - 750) {
        $('#about .title').addClass('show');
        setTimeout(() => {
            $('#about .about-img').addClass('show');
        }, 300);
        setTimeout(() => {
            $('#about .about-me').addClass('show');
        }, 300);
    }

    // My Skills
    if (wScroll > $('#skills').offset().top - 770) {
        $('#skills .topper').addClass('show');
        setTimeout(() => {
            $('#skills .col-one').addClass('show');
        }, 300);
        setTimeout(() => {
            $('#skills .col-two').addClass('show');
        }, 500);
        setTimeout(() => {
            $('#skills .col-three').addClass('show');
        }, 700);
        setTimeout(() => {
            $('#skills .col-four').addClass('show');
        }, 900);
    }

    // Contact Me
    if (wScroll > $('#contact').offset().top - 774) {
        $('#contact .topper').addClass('show');
        setTimeout(() => {
            $('#contact .col-one').addClass('show');
        }, 300);
        setTimeout(() => {
            $('#contact .col-two').addClass('show');
        }, 600);
        setTimeout(() => {
            $('#contact .col-three').addClass('show');
        }, 900);
    }
});

$(window).scroll(() => {
    let wScroll = $(this).scrollTop();

    // About Me
    if (wScroll > $('#about').offset().top - 750) {
        $('#about .title').addClass('show');
        $('#about .line').addClass('show');
        setTimeout(() => {
            $('#about .about-img').addClass('show');
        }, 300);
        setTimeout(() => {
            $('#about .about-me').addClass('show');
        }, 300);
    }

    // My Skills
    if (wScroll > $('#skills').offset().top - 770) {
        $('#skills .topper').addClass('show');
        setTimeout(() => {
            $('#skills .col-one').addClass('show');
        }, 300);
        setTimeout(() => {
            $('#skills .col-two').addClass('show');
        }, 500);
        setTimeout(() => {
            $('#skills .col-three').addClass('show');
        }, 700);
        setTimeout(() => {
            $('#skills .col-four').addClass('show');
        }, 900);
    }

    // My Portfolio
    if (wScroll > $('#portfolio').offset().top - 770) {
        $('#portfolio .topper').addClass('show');
        setTimeout(() => {
            $('#portfolio .col-one').addClass('show');
        }, 300);
        setTimeout(() => {
            $('#portfolio .col-two').addClass('show');
        }, 500);
    }

    // Contact Me
    if (wScroll > $('#contact').offset().top - 774) {
        $('#contact .topper').addClass('show');
        setTimeout(() => {
            $('#contact .col-one').addClass('show');
        }, 300);
        setTimeout(() => {
            $('#contact .col-two').addClass('show');
        }, 600);
        setTimeout(() => {
            $('#contact .col-three').addClass('show');
        }, 900);
    }

    // Go to top button
    if (wScroll > $('#about').offset().top) {
        $('.go-top-btn').addClass('show');
    } else {
        $('.go-top-btn').removeClass('show');
    }
});

