$(document).ready(function(){

// Delay animation for active menu
	var activeMenu = $('.main-nav').find('li.active');
	activeMenu.removeClass('active');
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