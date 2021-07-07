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

    $('.header-search').click(function(e) {
        $('html').removeClass('sites-open');
        $('html').addClass('burger-open');
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

    $('.burger li').each(function() {
        if ($(this).find('ul').length > 0) {
            $(this).addClass('with-submenu');
            $(this).find('> a').append('<span><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#burger-submenu-arrow"></use></svg></span>');
        }
    });

    $('.burger-menu ul li a span').click(function(e) {
        $(this).parent().parent().toggleClass('open');
        e.preventDefault();
    });

    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        dots: true,
        fade: true,
        speed: 0,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1088,
                settings: {
                    arrows: false,
                    dots: false,
                    fade: false,
                    speed: 300,
                    variableWidth: true
                }
            }
        ]
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.main-slider .slick-slide.prev').removeClass('prev');
        $('.main-slider .slick-slide').eq(currentSlide).addClass('prev');
    });

    $('.main-important-item-links-list').mCustomScrollbar({
        axis: 'y',
        scrollInertia: 300
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
        prevHtml: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 17.5L9 12L14.5 6.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>',
        nextHtml: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.5L15.5 12L10 6.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>',
        onSelect: function(fd, d, picker) {
            $('.news-filter-dates-field').eq(0).find('input').val(('0' + d[0].getDate()).slice(-2) + '.' + ('0' + (d[0].getMonth() + 1)).slice(-2) + '.' + d[0].getFullYear());
            if (d.length == 2) {
                $('.news-filter-dates-field').eq(1).find('input').val(('0' + d[1].getDate()).slice(-2) + '.' + ('0' + (d[1].getMonth() + 1)).slice(-2) + '.' + d[1].getFullYear());
            } else {
                $('.news-filter-dates-field').eq(1).find('input').val('');
            }
        }
    })

    $('.news-filter-dates-from').datepicker({
        prevHtml: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 17.5L9 12L14.5 6.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>',
        nextHtml: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.5L15.5 12L10 6.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>',
        onSelect: function(fd, d, picker) {
            $('.news-filter-submit input').prop('disabled', false);
            $('.news-filter-dates-to').data('datepicker').update('minDate', d);
            $('.news-filter-calendar-datepicker').data('datepicker').selectDate([d, null]);
        }
    });

    $('.news-filter-dates-to').datepicker({
        prevHtml: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 17.5L9 12L14.5 6.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>',
        nextHtml: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.5L15.5 12L10 6.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>',
        position: 'bottom right',
        onSelect: function(fd, d, picker) {
            $('.news-filter-submit input').prop('disabled', false);
            $('.news-filter-calendar-datepicker').data('datepicker').selectDate([null, d]);
        }
    });

	$('.news-filter-dates-from, .news-filter-dates-to').each(function() {
		var startDate = new Date();
		if (typeof ($(this).attr('value')) != 'undefined') {
			var curValue = $(this).attr('value');
			if (curValue != '') {
				var startDateArray = curValue.split('.');
				startDate = new Date(Number(startDateArray[2]), Number(startDateArray[1]) - 1 , Number(startDateArray[0]));
                $(this).data('datepicker').update('startDate', startDate);
                $(this).data('datepicker').selectDate(startDate);
                if ($(this).hasClass('docs-filter-dates-from')) {
                    $('.news-filter-dates-to').data('datepicker').update('minDate', startDate);
                }
			}
		}
	});

	$('body').on('click', '.media-video-link', function(e) {
        $('.media-video.start').removeClass('start');
		$('.media-video-player').html('');
		$(this).parent().addClass('start');
		$(this).parent().find('.media-video-player').html('<video src="' + $(this).attr('href') + '" autoplay="autoplay" controls="controls" tabindex="0"></video>');
		e.preventDefault();
	});

    $('.page-menu ul li a span').click(function(e) {
        if ($(this).parent().parent().find('ul').length > 0) {
            $(this).parent().parent().toggleClass('open');
            e.preventDefault();
        }
    });

    $('.docs-filter-dates-from').datepicker({
        prevHtml: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 17.5L9 12L14.5 6.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>',
        nextHtml: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.5L15.5 12L10 6.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>',
        onSelect: function(fd, d, picker) {
            $('.news-filter-submit input').prop('disabled', false);
            $('.docs-filter-dates-to').data('datepicker').update('minDate', d);
        }
    });

    $('.docs-filter-dates-to').datepicker({
        prevHtml: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 17.5L9 12L14.5 6.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>',
        nextHtml: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.5L15.5 12L10 6.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>',
        position: 'bottom right',
        onSelect: function(fd, d, picker) {
            $('.news-filter-submit input').prop('disabled', false);
        }
    });

	$('.docs-filter-dates-from, .docs-filter-dates-to').each(function() {
		var startDate = new Date();
		if (typeof ($(this).attr('value')) != 'undefined') {
			var curValue = $(this).attr('value');
			if (curValue != '') {
				var startDateArray = curValue.split('.');
				startDate = new Date(Number(startDateArray[2]), Number(startDateArray[1]) - 1 , Number(startDateArray[0]));
                $(this).data('datepicker').update('startDate', startDate);
                $(this).data('datepicker').selectDate(startDate);
                if ($(this).hasClass('docs-filter-dates-from')) {
                    $('.docs-filter-dates-to').data('datepicker').update('minDate', startDate);
                }
			}
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
        axis: 'y',
        scrollInertia: 300
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

    $('.structure-group-open').click(function(e) {
        $(this).parent().parent().toggleClass('open');
        e.preventDefault();
    });

    $('body').on('click', '.tabs-menu ul li a', function(e) {
        var curItem = $(this).parent();
        if (!curItem.hasClass('active')) {
            var curTabs = curItem.parents().filter('.tabs');
            var curIndex = curTabs.find('.tabs-menu ul li').index(curItem);
            curTabs.find('.tabs-menu ul li.active').removeClass('active')
            curItem.addClass('active');
            curTabs.find('.tabs-content.active').removeClass('active');
            curTabs.find('.tabs-content').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('body').on('click', '.window-link', function(e) {
        windowOpen($(this).attr('href'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window')) {
            windowClose();
        }
    });

    $('body').on('click', '.window-close', function(e) {
        windowClose();
        e.preventDefault();
    });

    $('body').on('click', '.warning-close', function(e) {
        $(this).parent().fadeOut();
        e.preventDefault();
    });

    $('body').on('click', '.news-tags-list-more a', function(e) {
        $(this).parent().prev().toggleClass('open');
        e.preventDefault();
    });

    $('body').on('click', '.snippet-more-link a', function(e) {
        $(this).parent().parent().toggleClass('open');
        e.preventDefault();
    });

    $('.news-photos').each(function() {
        var curGallery = $(this);
        curGallery.find('.news-photos-item:lt(15)').addClass('visible');
        if (curGallery.find('.news-photos-item').length > curGallery.find('.news-photos-item.visible').length) {
            curGallery.addClass('with-more');
        }
        var curCount = curGallery.find('.news-photos-item').length / 2;
        curGallery.find('.news-photos-list').css({'width': curCount * 272});
    });

    $('.news-photos-more a').click(function(e) {
        var curGallery = $(this).parents().filter('.news-photos');
        var curCount = curGallery.find('.news-photos-item.visible').length;
        curCount += 15;
        console.log(curCount);
        curGallery.find('.news-photos-item:lt(' + curCount + ')').addClass('visible');
        if (curGallery.find('.news-photos-item').length == curGallery.find('.news-photos-item.visible').length) {
            curGallery.removeClass('with-more');
        }
        e.preventDefault();
    });

    $('.events-old-link a').click(function(e) {
        $('.events-old-link').toggleClass('active');
        $('.events-old').toggleClass('open');
        e.preventDefault();
    });

    $('.news-filter-title').click(function(e) {
        $('.news-filter').toggleClass('open');
        e.preventDefault();
    });

    $('.news-tags-title').click(function(e) {
        $('.news-tags').toggleClass('open');
        e.preventDefault();
    });

    $('.content-menu').each(function() {
        var curMenu = $(this);
        var curItems = [];

        curMenu.find('ul li a').each(function() {
            var curLink = $(this);
            curItems.push([curLink.html(), curLink.attr('href'), curLink.parent().hasClass('active')]);
        });
        curMenu.data('list', JSON.stringify(curItems));
        $(window).trigger('resize');
    });

    $('body').on('click', '.content-menu-mobile-link', function(e) {
        $(this).parents().filter('.content-menu').addClass('open');
        e.preventDefault();
    });

    $('body').on('click', '.content-menu-mobile-close', function(e) {
        $(this).parents().filter('.content-menu').removeClass('open');
        e.preventDefault();
    });

    $('body').on('click', '[data-href]', function(e) {
        window.location = $(this).attr('data-href');
        e.preventDefault();
    });

    $('.top-video').each(function() {
        $('header').append('<div class="header-video visible"><a href="' + $(this).attr('href') + '" class="top-video">' + $(this).html() + '</a></div>');
        $('.wrapper').addClass('with-header-video');
    });

    $('.snippet-list-item-header').click(function(e) {
        var curItem = $(this).parent();
        curItem.toggleClass('open');
        curItem.find('.snippet-list-item-detail').slideToggle();
        e.preventDefault();
    });

    $('.container table').each(function() {
        var curTable = $(this);
        if (!curTable.parent().hasClass('table-scroll')) {
            curTable.wrap('<div class="table-scroll"></div>');
        }
    });

    $('.site-old-close a').click(function(e) {
        $('.site-old').remove();
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

$(window).on('load resize', function() {

    if ($(window).width() > 1088) {
        $('.main-important').each(function() {
            var curList = $(this);
            if (curList.hasClass('slick-slider')) {
                curList.slick('unslick');
            }
        });

        $('.news-photos').each(function() {
            $('.news-photos').mCustomScrollbar('destroy');
        });

        if ($('.table-scroll').length > 0) {
            $('.table-scroll').mCustomScrollbar('destroy');
        }

        $('.content-menu').each(function() {
            var curMenu = $(this);
            if (typeof curMenu.data('list') !== 'undefined') {
                var curItems = JSON.parse(curMenu.data('list'));
                curMenu.find('ul').html('');
                curMenu.find('.content-menu-mobile-link').remove();
                curMenu.find('.content-menu-mobile').remove();
                if (curItems.length > 2) {
                    var addCount = 0;
                    for (var i = 0; i < curItems.length; i++) {
                        var classActive = '';
                        if (curItems[i][2]) {
                            classActive = ' class="active"';
                        }
                        curMenu.find('ul').append('<li' + classActive + '><a href="' + curItems[i][1] + '">' + curItems[i][0] + '</a></li>');
                        if ((addCount > 0) || (curMenu.find('ul').width() > curMenu.width() - 108)) {
                            addCount++;
                            curMenu.find('ul li:last-child').remove();
                        }
                    }
                    if (addCount > 0) {
                        curMenu.find('ul').append('<li class="content-menu-more-link"><a href="#">Еще ' + addCount + '<svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#burger-submenu-arrow"></use></svg></a><ul></ul></li>');
                        for (var i = curItems.length - addCount; i < curItems.length; i++) {
                            var classActive = '';
                            if (curItems[i][2]) {
                                classActive = ' class="active"';
                            }
                            curMenu.find('.content-menu-more-link ul').append('<li' + classActive + '><a href="' + curItems[i][1] + '">' + curItems[i][0] + '</a></li>');
                        }
                    }
                } else {
                    for (var i = 0; i < curItems.length; i++) {
                        var classActive = '';
                        if (curItems[i][2]) {
                            classActive = ' class="active"';
                        }
                        curMenu.find('ul').append('<li' + classActive + '><a href="' + curItems[i][1] + '">' + curItems[i][0] + '</a></li>');
                    }
                }
            }
        });

        $('.burger').mCustomScrollbar({
            axis: 'y',
            scrollInertia: 300
        });

        $('.sites').mCustomScrollbar({
            axis: 'y',
            scrollInertia: 300
        });
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

        $('.news-photos').each(function() {
            var curTableScroll = $(this);
            curTableScroll.mCustomScrollbar({
                axis: 'x'
            });
        });

        if ($('.table-scroll').length > 0) {
            $('.table-scroll').each(function() {
                var curTableScroll = $(this);
                curTableScroll.mCustomScrollbar({
                    axis: 'x'
                });
            });
        }

        $('.content-menu').each(function() {
            var curMenu = $(this);
            if (typeof curMenu.data('list') !== 'undefined') {
                var curItems = JSON.parse(curMenu.data('list'));
                curMenu.find('ul').html('');
                curMenu.find('.content-menu-mobile-link').remove();
                curMenu.find('.content-menu-mobile').remove();
                for (var i = 0; i < curItems.length; i++) {
                    var classActive = '';
                    if (curItems[i][2]) {
                        classActive = ' class="active"';
                    }
                    curMenu.find('ul').append('<li' + classActive + '><a href="' + curItems[i][1] + '">' + curItems[i][0] + '</a></li>');
                }
                if (curItems.length > 2 && curMenu.find('ul').width() > curMenu.width()) {
                    curMenu.prepend('<a href="#" class="content-menu-mobile-link"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#content-menu-mobile-link"></use></svg></a>')
                    curMenu.append('<div class="content-menu-mobile"><ul></ul><a href="#" class="content-menu-mobile-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#content-menu-mobile-close"></use></svg></a></div>');
                    for (var i = 0; i < curItems.length; i++) {
                        var classActive = '';
                        if (curItems[i][2]) {
                            classActive = ' class="active"';
                        }
                        curMenu.find('.content-menu-mobile ul').append('<li' + classActive + '><a href="' + curItems[i][1] + '">' + curItems[i][0] + '</a></li>');
                    }
                }
            }
        });

        $('.burger').mCustomScrollbar('destroy');

        $('.sites').mCustomScrollbar('destroy');
    }

    $('.news-tags-list').each(function() {
        var curBlock = $(this);
        curBlock.removeClass('open with-more');
        if (curBlock.height() < curBlock.find('.news-tags-list-inner').height()) {
            curBlock.addClass('with-more');
        }
    });

    $('.snippet-more').each(function() {
        var curBlock = $(this);
        curBlock.removeClass('open with-more');
        if (curBlock.find('.snippet-more-container').height() < curBlock.find('.snippet-more-content').height()) {
            curBlock.addClass('with-more');
        }
    });

});

function windowOpen(linkWindow) {
    if ($('.window').length == 0) {
        var curPadding = $('.wrapper').width();
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});

        $('body').append('<div class="window"><div class="window-loading"></div></div>')

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
    } else {
        $('.window').append('<div class="window-loading"></div>')
        $('.window-container').addClass('window-container-preload');
    }

    $.ajax({
        type: 'POST',
        url: linkWindow,
        processData: false,
        contentType: false,
        dataType: 'html',
        cache: false
    }).done(function(html) {
        if ($('.window-container').length == 0) {
            $('.window').html('<div class="window-container window-container-preload">' + html + '<a href="#" class="window-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-close"></use></svg></a></div>');
        } else {
            $('.window-container').html(html + '<a href="#" class="window-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-close"></use></svg></a>');
            $('.window .window-loading').remove();
        }

        window.setTimeout(function() {
            $('.window-container-preload').removeClass('window-container-preload');
        }, 100);

        $('.window form').each(function() {
            initForm($(this));
        });

        $(window).trigger('resize');
    });
}

function windowClose() {
    if ($('.window').length > 0) {
        $('.window').remove();
        $('html').removeClass('window-open');
        $('body').css({'margin-right': 0});
        $('.wrapper').css({'top': 0});
        $(window).scrollTop($('.wrapper').data('curScroll'));
    }
}

var lastScrollTop = 0;
var didScroll = false;
var delta = 5;

$(window).on('scroll', function() {
    didScroll = true;
    window.setInterval(function() {
        if (didScroll) {
            var st = $(window).scrollTop();
            if (Math.abs(lastScrollTop - st) <= delta) {
                return;
            }
            if (st > lastScrollTop && st > 0) {
                $('.header-video').removeClass('visible');
            } else {
                if (st + $(window).height() < $(document).height() || st == 0) {
                    $('.header-video').addClass('visible');
                }
            }
			lastScrollTop = st;
            didScroll = false;
        }
    }, 50);
});