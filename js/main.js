$(document).ready(function(){

// Clear placeholder
	(function() {
		$('input,textarea').focus(function(){
				$(this).data('placeholder',$(this).attr('placeholder'))
				$(this).attr('placeholder','');
		});
		$('input,textarea').blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}());

// Delay animation for active menu
	var activeMenu = $('.main-nav__left').find('li:first-child');
	setTimeout(function(){
		activeMenu.addClass('active');
	}, 4000);

// js-inview
	$('.js-inview').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
				if (visiblePartY == 'top') {
				$(this).addClass("is-visible");
			} else if (visiblePartY == 'bottom') {
				// bottom part of element is visible
				$(this).addClass("is-visible");
			} else {
				// whole part of element is visible
				$(this).addClass("is-visible");
			}
		} else {
			// element has gone out of viewport
		}
	});

// WOW animation
	new WOW().init();

// Slick slider
	$('.pf-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.pf-slider-for',
		fade: true
	});
	$('.pf-slider-for').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		autoplay: false,
		asNavFor: '.pf-slider',
		swipe: true,
		arrows: true,
		centerMode: true,
		centerPadding: '136px',
		nextArrow: '<div class="slick-next"><span class="icon-chevron-thin-right icon-blue"></span><span class="icon-chevron-thin-right icon-dark"></span></div>',
		prevArrow: '<div class="slick-prev"><span class="icon-chevron-thin-left icon-dark"></span><span class="icon-chevron-thin-left icon-blue"></span></div>'
	});

	$('.pf-slider-for .slick-center').addClass('slick-scale');
	// change portfolio info blocks & scale slides
	$('.pf-slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.pf-slider-for .slick-center').removeClass('slick-scale');
		$('.pf-info > li').removeClass('active');
		$('.pf-info > li').eq(nextSlide).addClass('active');
	});

	// get slick slider Height
	var sliderHeight = $('.pf-slider').height();
	$('.pf-slider').css('height', sliderHeight);
	$(window).load(function(){
		$('.pf-slider').hide();
	});

	// show slide onClick
	$('.pf-slider-for .slick-slide').on('click', function(){
		$('.pf-slider').slideDown('slow');
		$('.pf-slider').get(0).slick.setPosition(); // fix for display none
		$('.slider-close').fadeIn('slow');
		$('.portfolio_mid_3').addClass('active');
	});

	// close slide
	$('.slider-close').on('click', function(){
		$(this).fadeOut('slow');
		$('.pf-slider').slideUp('slow');
		$('.portfolio_mid_3').removeClass('active');
	});

	// zoomIn middle slide
	$('.pf-slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.pf-slider-for .slick-center').addClass('slick-scale');
	});

	//Equal heights portfolio info blocks.
	$('.pf-info > li').addClass('active');
	var infoHeight = $('.pf-info > li').eq(0).height();
	var infoHeightMax = infoHeight;
	$('.pf-info > li').each(function(){
		infoHeight = $(this).height();
		if (infoHeight > infoHeightMax) {
			infoHeightMax = infoHeight;
		};
	});
	infoHeightMax += 120;
	$('.pf-info > li').removeClass('active');
	$('.pf-info > li').eq(0).addClass('active');
	$('.pf-info').css('height', infoHeightMax);

// Fancybox portfolio
	$(".pf-fancybox").fancybox({
		theme: 'light',
		padding: 5,
		openEffect	: 'drop',
		closeEffect	: 'drop',
		prevEffect: 'none',
		nextEffect: 'none',
		caption : {
			type : 'outside'
		},
		locked: false,
		locale: 'ru',
		locales: {
			'ru': {
				CLOSE: 'закрыть',
				NEXT: 'вперед',
				PREV: 'назад',
				EXPAND: 'показать в полном размере'
			}
		}
	});

// 60fps scrolling
	var body = document.body,
	timer;
	window.addEventListener('scroll', function() {
		clearTimeout(timer);
		if(!body.classList.contains('disable-hover')) {
			body.classList.add('disable-hover')
		}
		timer = setTimeout(function(){
			body.classList.remove('disable-hover')
		}, 250);
	}, false);
	

});