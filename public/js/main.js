
// $(document).ready(function ($) {
// 	"use strict";
// 	/******** Collapse menu on click ********/
// 	$('.navbar-collapse a:not(.dropdown-toggle)').click(function () {
// 		if ($(window).width() < 768)
// 			$('.navbar-collapse').collapse('hide');
// 	});

// 	/******** Preloader ********/
// 	// will first fade out the loading animation
// 	$("#loading-animation").fadeOut();
// 	// will fade out the whole DIV that covers the website.
// 	$("#preloader").delay(600).fadeOut("slow");

// 	/******** hamburger ********/

// 	$('.menu').click(function () {
// 		$(this).toggleClass('open');
// 	});

// 	/******** Highlight current section ********/
// 	$(function () {
// 		var id;
// 		$(document).on('click', 'ul.nav-list li a', function () {
// 			id = $(this).attr('id');
// 		}).scroll(function () {
// 			$('a').removeClass('active');
// 			$("#" + id).addClass('active');
// 		});
// 	});
// });

// /********** BACK-TO-TOP BUTTON **********/
// $(window).scroll(function () {
// 	if ($(window).scrollTop() > 700) {
// 		$('.back-to-top').addClass('show');
// 		$('.toTop').addClass('show');
// 		$('.toTop i').addClass('show');
// 	} else {
// 		$('.back-to-top').removeClass('show');
// 		$('.toTop').removeClass('show');
// 		$('.toTop i').removeClass('show');
// 	}
// });

// $('.back-to-top').click(function () {
// 	$('html, body').animate({
// 		scrollTop: 0,
// 		easing: 'swing'
// 	}, 700);
// 	return false;
// });
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}