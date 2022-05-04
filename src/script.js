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
    $('#home .col-1').addClass('show');
    $('#home .col-2').addClass('show');

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
            $('#skills .col-1').addClass('show');
        }, 300);
        setTimeout(() => {
            $('#skills .col-2').addClass('show');
        }, 500);
        setTimeout(() => {
            $('#skills .col-3').addClass('show');
        }, 700);
    }
});

