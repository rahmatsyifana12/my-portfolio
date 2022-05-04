// Home
$(window).on('load', function() {
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

$(window).scroll(function() {
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

