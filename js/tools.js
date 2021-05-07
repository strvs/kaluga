$(document).ready(function() {

    $('.top-sites').click(function(e) {
        $('html').removeClass('burger-open');
        $('html').removeClass('search-open');
        $('html').addClass('sites-open');
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            $('html').removeClass('sites-open');
        }
    });

    $('.top-sites-close').click(function(e) {
        $('html').removeClass('sites-open');
        e.preventDefault();
    });

    $('.top-search').click(function(e) {
        $('html').removeClass('sites-open');
        $('html').removeClass('burger-open');
        $('html').addClass('search-open');
        e.preventDefault();
    });

    $('.search-window-bg').click(function() {
        $('html').removeClass('search-open');
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            $('html').removeClass('search-open');
        }
    });

    $('.search-window-close').click(function(e) {
        $('html').removeClass('search-open');
        e.preventDefault();
    });

    $('.header-burger-link').click(function(e) {
        $('html').removeClass('sites-open');
        $('html').toggleClass('burger-open');
        e.preventDefault();
    });

    $('.burger').mCustomScrollbar({
        axis: 'y'
    });

    $('.sites').mCustomScrollbar({
        axis: 'y'
    });

    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        dots: true
    });

    $('.main-important-item-links-list').mCustomScrollbar({
        axis: 'y'
    });

    $('.main-links').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 6,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        dots: true
    });

    $('.datepicker-here').datepicker({
        inline: true,
        range: true,
        toggleSelected: false
    })

});