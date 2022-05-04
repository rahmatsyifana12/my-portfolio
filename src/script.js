$(document).ready(() => {
    const type = new Typed('.auto-type', {
        strings: ['a student', 'a web developer', 'a tech enthusiast'],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true
    });
});

// Home
$(window).on('load', () => {
    $('#home .container').addClass('show');
    let wScroll = $(this).scrollTop();

    console.log(wScroll);
    if (wScroll > $('#about').offset().top - 546) {
        $('#about .title').addClass('show');
        setTimeout(() => {
            $('#about .about-img').addClass('show');
        }, 300);
        setTimeout(() => {
            $('#about .about-me-title').addClass('show');
        }, 300);
        setTimeout(() => {
            $('#about .desc').addClass('show');
        }, 300);
    }
});

$(window).scroll(() => {
    let wScroll = $(this).scrollTop();

    // About Me
    if (wScroll > $('#about').offset().top - 546) {
        $('#about .title').addClass('show');
        $('#about .line').addClass('show');
        setTimeout(() => {
            $('#about .about-img').addClass('show');
        }, 300);
        setTimeout(() => {
            $('#about .about-me-title').addClass('show');
        }, 300);
        setTimeout(() => {
            $('#about .desc').addClass('show');
        }, 300);
    }
});

