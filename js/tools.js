$(document).ready(function() {

	$('body').on('focus', '.form-input input, .form-input textarea', function() {
		$(this).parent().addClass('focus');
	});

	$('body').on('blur', '.form-input input, .form-input textarea', function() {
		$(this).parent().removeClass('focus');
		if ($(this).val() != '') {
			$(this).parent().addClass('full');
		} else {
			$(this).parent().removeClass('full');
		}
	});

	$('body').on('keyup', '.form-input input, .form-input textarea', function() {
		$(this).parent().removeClass('focus');
		if ($(this).val() != '') {
			$(this).parent().addClass('full');
		} else {
			$(this).parent().removeClass('full');
		}
	});

	$('body').on('click', '.form-input-clear', function(e) {
        $(this).parent().find('input').val('').trigger('blur');
        e.preventDefault();
	});

	$('form').each(function() {
		initForm($(this));
	});

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

    $('.news-filter-calendar-datepicker').datepicker({
        inline: true,
        range: true,
        toggleSelected: false,
        onSelect: function(fd, d, picker) {
            $('.news-filter-dates-field').eq(0).find('input').val(('0' + d[0].getDate()).slice(-2) + '.' + ('0' + (d[0].getMonth() + 1)).slice(-2) + '.' + d[0].getFullYear());
            if (d.length == 2) {
                $('.news-filter-dates-field').eq(1).find('input').val(('0' + d[1].getDate()).slice(-2) + '.' + ('0' + (d[1].getMonth() + 1)).slice(-2) + '.' + d[1].getFullYear());
            } else {
                $('.news-filter-dates-field').eq(1).find('input').val('');
            }
        }
    })

	$('body').on('click', '.media-video-link', function(e) {
        $('.media-video.start').removeClass('start');
		$('.media-video-player').html('');
		$(this).parent().addClass('start');
		$(this).parent().find('.media-video-player').html('<video src="' + $(this).attr('href') + '" autoplay="autoplay" controls="controls" tabindex="0"></video>');
		e.preventDefault();
	});

});

function initForm(curForm) {

	curForm.find('.form-input input, .form-input textarea').each(function() {
		if ($(this).val() != '') {
			$(this).parent().addClass('full');
		}
	});

}