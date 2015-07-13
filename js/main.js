$(document).ready(function(){

// Get width of SVG path
	var path = document.querySelector('#intro_blue_3');
	var length = path.getTotalLength();
	console.log(length);

// Delay animation for active menu
	var activeMenu = $('.main-nav').find('li.active');
		console.log(activeMenu);
		activeMenu.removeClass('active');
		setTimeout(function(){
			activeMenu.addClass('active');
		}, 4000);

// Snap SVG

	var dashArray = Array;
	dashArray[0] = $('#line_blue_1').attr('stroke-dashoffset');
	dashArray[1] = $('#line_dark_1').attr('stroke-dashoffset');
	dashArray[2] = $('#line_blue_2').attr('stroke-dashoffset');
	dashArray[3] = $('#line_dark_2').attr('stroke-dashoffset');
	dashArray[4] = $('#line_blue_3').attr('stroke-dashoffset');
	dashArray[5] = $('#line_dark_3').attr('stroke-dashoffset');
	dashArray[6] = $('#line_double_1_1').attr('stroke-dashoffset');
	dashArray[7] = $('#line_double_2_1').attr('stroke-dashoffset');
	dashArray[8] = $('#line_double_1_2').attr('stroke-dashoffset');
	dashArray[9] = $('#line_double_2_2').attr('stroke-dashoffset');
	dashArray[10] = $('#line_double_1_3').attr('stroke-dashoffset');
	dashArray[11] = $('#line_double_2_3').attr('stroke-dashoffset');
	dashArray[12] = $('#line_out_1_1').attr('stroke-dashoffset');
	dashArray[13] = $('#line_out_2_1').attr('stroke-dashoffset');
	dashArray[14] = $('#line_out_1_2').attr('stroke-dashoffset');
	dashArray[15] = $('#line_out_2_2').attr('stroke-dashoffset');
	dashArray[16] = $('#line_out_1_3').attr('stroke-dashoffset');
	dashArray[17] = $('#line_out_2_3').attr('stroke-dashoffset');

	dashArray[18] = $('#intro_blue_1').attr('stroke-dashoffset');
	dashArray[19] = $('#intro_dark_1').attr('stroke-dashoffset');
	dashArray[20] = $('#intro_out_1').attr('stroke-dashoffset');
	dashArray[21] = $('#intro_blue_2').attr('stroke-dashoffset');
	dashArray[22] = $('#intro_dark_2').attr('stroke-dashoffset');
	dashArray[23] = $('#intro_out_2').attr('stroke-dashoffset');
	dashArray[24] = $('#intro_blue_3').attr('stroke-dashoffset');
	dashArray[25] = $('#intro_dark_3').attr('stroke-dashoffset');

// Header SVG
 	// Animate left section
	setTimeout(function(){
		// line blue
		Snap.animate(dashArray[0], 0, function (val) {
		    $('#line_blue_1').attr({
		        'stroke-dashoffset': val
		    });
		}, 1000);
		setTimeout(function(){
			Snap.animate(dashArray[6], 0, function (val) {
			    $('#line_double_1_1').attr({
			        'stroke-dashoffset': val
			    });
			}, 300);
		}, 1000);
		setTimeout(function(){
			Snap.animate(dashArray[14], 0, function (val) {
			    $('#line_out_1_2').attr({
			        'stroke-dashoffset': val
			    });
			}, 1000);
		}, 1300);

		setTimeout(function(){
			Snap.animate(dashArray[8], 0, function (val) {
			    $('#line_double_1_2').attr({
			        'stroke-dashoffset': val
			    });
			}, 150);
		}, 1000);
		setTimeout(function(){
			Snap.animate(dashArray[10], 0, function (val) {
			    $('#line_double_1_3').attr({
			        'stroke-dashoffset': val
			    });
			}, 150);
		}, 1150);
		setTimeout(function(){
			Snap.animate(dashArray[16], 0, function (val) {
			    $('#line_out_1_3').attr({
			        'stroke-dashoffset': val
			    });
			}, 1000);
		}, 1300);

		// line dark
		setTimeout(function(){
			Snap.animate(dashArray[1], 0, function (val) {
			    $('#line_dark_1').attr({
			        'stroke-dashoffset': val
			    });
			}, 1200);
		}, 200);
		setTimeout(function(){
			Snap.animate(dashArray[12], 0, function (val) {
			    $('#line_out_1_1').attr({
			        'stroke-dashoffset': val
			    });
			}, 1000);
		}, 1400);

	}, 2000);
	// Animate right section
	setTimeout(function(){

		// line blue
		Snap.animate(dashArray[2], 0, function (val) {
		    $('#line_blue_2').attr({
		        'stroke-dashoffset': val
		    });
		}, 1000);
		setTimeout(function(){
			Snap.animate(dashArray[7], 0, function (val) {
			    $('#line_double_2_1').attr({
			        'stroke-dashoffset': val
			    });
			}, 300);
		}, 1000);
		setTimeout(function(){
			Snap.animate(dashArray[15], 0, function (val) {
			    $('#line_out_2_2').attr({
			        'stroke-dashoffset': val
			    });
			}, 1000);
		}, 1300);

		setTimeout(function(){
			Snap.animate(dashArray[9], 0, function (val) {
			    $('#line_double_2_2').attr({
			        'stroke-dashoffset': val
			    });
			}, 150);
		}, 1000);
		setTimeout(function(){
			Snap.animate(dashArray[11], 0, function (val) {
			    $('#line_double_2_3').attr({
			        'stroke-dashoffset': val
			    });
			}, 150);
		}, 1150);
		setTimeout(function(){
			Snap.animate(dashArray[17], 0, function (val) {
			    $('#line_out_2_3').attr({
			        'stroke-dashoffset': val
			    });
			}, 1000);
		}, 1300);

		// line dark
		setTimeout(function(){
			Snap.animate(dashArray[3], 0, function (val) {
			    $('#line_dark_2').attr({
			        'stroke-dashoffset': val
			    });
			}, 1200);
		}, 200);
		setTimeout(function(){
			Snap.animate(dashArray[13], 0, function (val) {
			    $('#line_out_2_1').attr({
			        'stroke-dashoffset': val
			    });
			}, 1000);
		}, 1400);

	}, 2000);

	// Animate mid section
	setTimeout(function(){
		Snap.animate(dashArray[5], 0, function (val) {
		    $('#line_dark_3').attr({
		        'stroke-dashoffset': val
		    });
		}, 1000);
		Snap.animate(dashArray[4], 0, function (val) {
		    $('#line_blue_3').attr({
		        'stroke-dashoffset': val
		    });
		}, 1000);
	}, 2000);

// Intro SVG
	// Animate left section
	setTimeout(function(){
		// Line blue
		Snap.animate(dashArray[18], 0, function (val) {
		    $('#intro_blue_1').attr({
		        'stroke-dashoffset': val
		    });
		}, 1000);
		Snap.animate(dashArray[19], 0, function (val) {
		    $('#intro_dark_1').attr({
		        'stroke-dashoffset': val
		    });
		}, 1300);
		setTimeout(function(){
			Snap.animate(dashArray[20], 0, function (val) {
			    $('#intro_out_1').attr({
			        'stroke-dashoffset': val
			    });
			}, 1000);
		}, 1300);
	}, 2000);

	// Animate right section
	setTimeout(function(){
		// Line blue
		Snap.animate(dashArray[21], 0, function (val) {
		    $('#intro_blue_2').attr({
		        'stroke-dashoffset': val
		    });
		}, 1000);
		Snap.animate(dashArray[22], 0, function (val) {
		    $('#intro_dark_2').attr({
		        'stroke-dashoffset': val
		    });
		}, 1300);
		setTimeout(function(){
			Snap.animate(dashArray[23], 0, function (val) {
			    $('#intro_out_2').attr({
			        'stroke-dashoffset': val
			    });
			}, 1000);
		}, 1300);
	}, 2000);

	// Animate mid section
	setTimeout(function(){
		Snap.animate(dashArray[25], 0, function (val) {
		    $('#intro_dark_3').attr({
		        'stroke-dashoffset': val
		    });
		}, 1000);
		Snap.animate(dashArray[24], 0, function (val) {
		    $('#intro_blue_3').attr({
		        'stroke-dashoffset': val
		    });
		}, 1000);
	}, 2000);


// var path = document.querySelector('.header_line_h_dark');
// var length = path.getTotalLength();
// console.log(length);

// WOW animation
	new WOW().init();



// // js-inview
// 	$('.js-inview').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
// 		if (isInView) {
// 				if (visiblePartY == 'top') {
// 				$(this).addClass("is-visible");
// 			} else if (visiblePartY == 'bottom') {
// 				// bottom part of element is visible
// 				$(this).addClass("is-visible");
// 			} else {
// 				// whole part of element is visible
// 				$(this).addClass("is-visible");
// 			}
// 		} else {
// 			// element has gone out of viewport
// 		}
// 	});

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