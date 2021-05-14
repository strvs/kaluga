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

    $('.top-search, .header-search').click(function(e) {
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
        dots: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1088,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
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
        dots: true,
        responsive: [
            {
                breakpoint: 1088,
                settings: {
                    infinite: false,
                    slidesPerRow: 2,
                    arrows: false,
                    dots: false
                }
            }
        ]
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

    $('.page-menu ul li a').click(function(e) {
        if ($(this).parent().find('ul').length > 0) {
            $(this).parent().toggleClass('open');
            e.preventDefault();
        }
    });

    $('.content-menu-current').click(function(e) {
        $(this).parent().toggleClass('open');
    });

    $('.docs-filter-dates-from').datepicker({
        onSelect: function(fd, d, picker) {
            $('.news-filter-submit input').prop('disabled', false);
        }
    });

    $('.docs-filter-dates-to').datepicker({
        onSelect: function(fd, d, picker) {
            $('.news-filter-submit input').prop('disabled', false);
        }
    });

    $('.news-filter-select-current').click(function() {
        var curSelect = $(this).parent();
        if (curSelect.hasClass('open')) {
            curSelect.removeClass('open');
        } else {
            $('.news-filter-select.open').removeClass('open');
            curSelect.addClass('open');
        }
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.news-filter-select').length == 0) {
            $('.news-filter-select.open').removeClass('open');
        }
    });

    $('.news-filter-select-list').mCustomScrollbar({
        axis: 'y'
    });

    $('.news-filter-select-item input').change(function() {
        var curSelect = $(this).parents().filter('.news-filter-select');
        var curText = '';
        curSelect.find('.news-filter-select-item input:checked').each(function() {
            if (curText != '') {
                curText += ', ';
            }
            curText += $(this).parent().find('span').html();
        });
        curSelect.find('.news-filter-select-current span').html(curText);
    });

    $('.news-filter-select').each(function() {
        var curSelect = $(this);
        var curText = '';
        curSelect.find('.news-filter-select-item input:checked').each(function() {
            if (curText != '') {
                curText += ', ';
            }
            curText += $(this).parent().find('span').html();
        });
        curSelect.find('.news-filter-select-current span').html(curText);
    });

    $('.news-filter input').change(function() {
        $('.news-filter-submit input').prop('disabled', false);
    });

    $('.news-filter input[type="text"]').on('keyup', function() {
        $('.news-filter-submit input').prop('disabled', false);
    });
    
    $('.structure-group').each(function() {
        var curGroup = $(this);
        if (curGroup.find('.structure-group').length == 0) {
            curGroup.addClass('not-child');
        }
    });

});

function initForm(curForm) {

	curForm.find('.form-input input, .form-input textarea').each(function() {
		if ($(this).val() != '') {
			$(this).parent().addClass('full');
		}
	});

}

$(window).on('load resize', function() {

    if ($(window).width() > 1088) {
        $('.main-important').each(function() {
            var curList = $(this);
            if (curList.hasClass('slick-slider')) {
                curList.slick('unslick');
            }
        });

        if ($('.table-scroll').length > 0) {
            $('.table-scroll').mCustomScrollbar('destroy');
        }
    } else {
        $('.main-important').each(function() {
            var curList = $(this);
            if (!curList.hasClass('slick-slider')) {
                curList.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                });
            }
        });

        if ($('.table-scroll').length > 0) {
            $('.table-scroll').each(function() {
                var curTableScroll = $(this);
                curTableScroll.mCustomScrollbar({
                    axis: 'x'
                });
            });
        }
    }
});