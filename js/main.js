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

// ScrollTo
	$(function(){
	    $('.main-nav').onePageNav({
			filter: ':not(.external)',
			scrollThreshold: 0.25,
			scrollSpeed: 1200,
			easing: 'swing',
			scrollOffset: 38
		});
	});

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
		$('.pf-slide.slick-slide').eq(currentSlide).children('.row + .row + .row').fadeOut();
		$('.btn-more').siblings('.row + .row + .row').find('.pf-slide__in').css('margin-top', '0');
		$('.btn-more').fadeIn();
		// refresh SVG
		setTimeout(function(){
			$('.pf-slide.slick-slide').find('svg').hide();
			$('.pf-slide.slick-slide').find('svg').get(0).offsetHeight; // no need to store this anywhere, the reference is enough
			$('.pf-slide.slick-slide').find('svg').show();
		}, 410);
		$('.btn-hide').fadeOut();
		eqRow = 2;
	});

	// zoomIn middle slide
	$('.pf-slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.pf-slider-for .slick-center').addClass('slick-scale');
	});

	// get slick slider Height
	$(window).load(function(){
		$('.pf-slider').hide();
	});

	// show slide onClick
	$('.pf-slider-for .slick-slide').on('click', function(){
		$('.pf-slider').slideDown('slow');
		$('.pf-slider').get(0).slick.setPosition(); // fix for display none
		$('.slider-close').fadeIn('slow');
		$('.portfolio_mid_3').addClass('active');
		$(window).scrollTo('#pf-slider', 1000, {offset: -35});
	});

	// close slide
	$('.slider-close').on('click', function(){
		$(this).fadeOut('slow');
		$('.pf-slide.slick-slide > .row + .row + .row').fadeOut();
		$('.pf-slider').slideUp('slow');
		$('.portfolio_mid_3').removeClass('active');
		$(window).scrollTo('#pf-slider-for', 1000, {offset: -100});
		eqRow = 2;
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
		helpers: {
			thumbs: true
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

// Slider show more / hide buttons
	var eqRow = 2;
	$('.btn-more').on('click', function(){
		$(this).siblings('.btn-hide').fadeIn();
		$(this).siblings('.row').eq(eqRow).slideDown();
		setTimeout(function(){
			$('.btn-more').each(function(){
				$(this).siblings('.row').eq(eqRow - 1).find('.pf-slide__in').css('margin-top', '-50px').addClass('LOLOLOL');
			});
		}, 400);
		$(window).scrollTo('+=250px', 1000);
		eqRow += 1;
		if ($(this).siblings('.row').eq(eqRow + 1).length > 0) {
		} else {
			$(this).fadeOut();
		};	
	});

	$('.btn-hide').on('click', function(){
		eqRow -= 1;
		$(this).siblings('.row').eq(eqRow).slideUp();
		$('.btn-more').each(function(){
			$(this).siblings('.row').eq(eqRow).find('.pf-slide__in').css('margin-top', '0');
		});
		// refresh SVG
		setTimeout(function(){
			$('.pf-slide.slick-slide').find('svg').hide();
			$('.pf-slide.slick-slide').find('svg').get(0).offsetHeight; // no need to store this anywhere, the reference is enough
			$('.pf-slide.slick-slide').find('svg').show();
		}, 410);
		$(window).scrollTo('-=250px', 1000);
		$('.btn-more').fadeIn();
		if (eqRow < 3) {
			$(this).fadeOut();
		};
	});

// Validation
	$.validate({
		validateOnBlur : true
	});
	$('input[name="user_phone"]').mask("(999) 999-99-99");


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
	

// Ajax Form
	(function () {
		var inner = $('.contact-form'),
			result = $('.form-success'),
			load = $('.form-loading'),
			newForm = $('.form-new');
		$.validate({
			onSuccess : function() {
				load.fadeIn();
				post_data = $('#form').serialize();
				
				//Ajax post data to server
				$.post('send.php', post_data, function(response){  
				    if (response.type == 'error'){ //load json data from server and output message     
				        output = '<div class="error">'+response.text+'</div>';
				    }
				    else {
				        output = '<div class="success">'+response.text+'</div>';
				        //reset values in all input fields
				        inner.fadeOut();
				        load.fadeOut();
				        result.fadeIn();
				        newForm.fadeIn();
				    }
				}, 'json');
				return false;
			}
		});
	}());

// New Message
	$('.btn-new').on('click', function(){
		$('.form-new').fadeOut();
		$('.form-success').fadeOut();
		$('.contact-form').find("input[type=text], textarea").val("");
		$('.contact-form').fadeIn();
	});


});

// Window Scroll
jQuery(window).scroll(function () {

    'use strict';

    if (jQuery(document).scrollTop() >= 67) {
        $('.main-nav-wrap').addClass('fixed');
        $('.logo').addClass('fixed');
    } else {
        $('.main-nav-wrap').removeClass('fixed');
        $('.logo').removeClass('fixed');
    }

});