"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
	},
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	},
	// /inputMask
	paddRight: function paddRight(elem) {
		var div = document.createElement('div');
		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';
		document.body.append(div);
		var padd = div.offsetWidth - div.clientWidth; // console.log(1);

		$(elem).css("paddingRight", padd);
		div.remove();
	},
	tinymce: function (_tinymce) {
		function tinymce() {
			return _tinymce.apply(this, arguments);
		}

		tinymce.toString = function () {
			return _tinymce.toString();
		};

		return tinymce;
	}(function () {
		var defaultProp = {
			menubar: false,
			language: 'ru',
			language_url: 'js/langs/ru.js',
			plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
			toolbar: "undo redo | bold italic underline strikethrough   ",
			content_css: ['//fonts.googleapis.com/css?family=Lato:300,300i,400,400i', // '//www.tiny.cloud/css/codepen.min.css',
			'./css/custom.css']
		};
		tinymce.init(_objectSpread({
			selector: 'textarea.textarea-block-js'
		}, defaultProp));
		tinymce.init(_objectSpread(_defineProperty({
			selector: '.note-block__text--js'
		}, "selector", '.note-block__text--js'), defaultProp, {
			inline: true,
			valid_elements: 'div,p,strong,em,span[style],a[href]',
			valid_styles: {
				'*': 'font-size,font-family,color,text-decoration,text-align'
			},
			powerpaste_word_import: 'clean',
			powerpaste_html_import: 'clean',
			fixed_toolbar_container: '.mytoolbar'
		}));
	}),
	select2: function select2() {
		$(".custom-select-wrap").each(function () {
			var th = $(this);
			th.find('.custom-select-js').select2({
				dropdownParent: th
			});
		});
	},
	sticky: function sticky() {
		$('.panel-block__head--js').scrollFix({});
		$('.footer-lesson').scrollFix({
			side: 'bottom'
		});
	},
	customScroll: function customScroll() {
		$(".custom-scroll-js").mCustomScrollbar({
			autoHideScrollbar: true,
			scrollbarPosition: "inside"
		});
	}
};

function eventHandler() {
	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.inputMask();
	JSCCommon.tinymce();
	JSCCommon.select2();
	JSCCommon.sticky();
	JSCCommon.customScroll(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/03.png);"></div>')
	// /добавляет подложку для pixel perfect

	function heightses() {
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();
		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}); // конец добавил

		if (window.matchMedia("(min-width: 992px)").matches) {// JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();
		$(".custom-scroll-js").mCustomScrollbar("update");
	});
	$(".accordion__toggle").click(function () {
		setTimeout(function () {
			$(".custom-scroll-js").mCustomScrollbar("update");
		}, 100);
	});
	heightses(); // листалка по стр

	$("  .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	}

	JSCCommon.paddRight('.top-line');
	$(".sidebar__toggle").click(function () {
		$('.sidebar__toggle').toggleClass('on');
		$(".sidebar__inner").toggleClass("active");
		$("body").toggleClass("fixed");

		if ($("body").hasClass('fixed')) {
			JSCCommon.paddRight('body');
		} else {
			$("body").css({
				"paddingRight": 0
			});
		}
	});
	$(document).mouseup(function (e) {
		var container = $(".sidebar__inner");

		if (container.has(e.target).length === 0) {
			$(".sidebar__toggle").removeClass("on"); // $("body").toggleClass("fixed");

			$(".sidebar__inner").removeClass("active");
			$("body, html").removeClass("fixed").css({
				"paddingRight": 0
			});
		}
	});
	$(".accordion__toggle").click(function () {
		$(this).toggleClass("active").next().slideToggle().toggleClass("active");
	});
	$('[data-toggle="tooltip"]').tooltip(); // $(".audio-js").each(function () {
	// 	const player = new Plyr($(this), {});
	// })

	var players = Array.from(document.querySelectorAll('.audio-js')).map(function (p) {
		return new Plyr(p);
	}); // // Expose player so it can be used from the console
	// window.player = player;

	$(document).on("click", ".edit-note--js", function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(".note-block__text--default").show();
			$(".note-block__text--edit").hide();
		} else {
			$(this).addClass("active");
			$(".note-block__text--default").hide();
			$(".note-block__text--edit").show();
		}
	});
	$(".droppable-section").each(function () {
		var th = $(this);
		var dragEl = th.find(".drag-element-js");
		var dropEl = th.find(".droppable-block");
		dragEl.draggable({
			revert: "invalid",
			containment: th,
			scroll: false,
			cancel: dropEl,
			refreshPositions: true,
			helper: "clone",
			snapMode: "inner"
		});
		dropEl.droppable({
			// greedy: true,
			containment: th,
			// cursor: "move",
			accept: dragEl,
			// tolerance: "fit",
			drop: function drop(event, ui) {
				$(ui.draggable).addClass('drug-in');
				var uiData = ui.draggable.data('name');
				$(this).addClass("ui-state-highlight").attr("data-drop", "".concat(uiData)).text(ui.draggable.text()).droppable("disable");
			},
			out: function out(event, ui) {
				DrafEll($(this), ui.draggable);
			}
		}); // удалить значение / вернуть на место 

		function DrafEll(drop, drag) {
			$(drag).removeClass('drug-in').animate({
				"top": '0',
				"left": '0'
			});
			drop.removeClass("ui-state-highlight").text('').droppable("enable").attr("data-drop", null);
		}

		$(document).on('click', '.ui-state-highlight', function () {
			var thData = $(this).attr("data-drop");
			DrafEll($(this), "[data-name=\"".concat(thData, "\"]"));
		});
	});
	$(".row-two").each(function () {
		var th = $(this);

		var elasticLine = function elasticLine() {
			var one = th.find(".connect-dot-left-js"),
					two = th.find(".connect-dot-right-js"),
					line = th.find(".line"),
					half = one.width() / 2,
					x,
					y,
					atan2,
					sel = [one, two];
			$(".row-two").on("click", one, function () {
				x = sel[0].offset().left - th.offset().left, y = sel[0].offset().top - th.offset().top, atan2 = 57.33 * Math.atan2(y, x);
				console.log(x, y);
				line.css({
					left: x,
					top: y,
					width: Math.sqrt(x * x + y * y),
					'-webkit-transform': 'rotate(' + atan2 + 'deg)',
					'-moz-transform': 'rotate(' + atan2 + 'deg)',
					'-ms-transform': 'rotate(' + atan2 + 'deg)',
					'-o-transform': 'rotate(' + atan2 + 'deg)',
					'transform': 'rotate(' + atan2 + 'deg)'
				}).addClass("bg-primary");
			});
			one.on("mousedown", function () {
				sel = [one, two], main();
			});
			two.on("mousedown", function () {
				sel = [two, one], main();
			});
			$(window).on('selectstart', function () {
				return false;
			});
			$(window).on('mouseup', function () {
				return $(window).off("mousemove");
			});

			function main() {
				$(window).on('mousemove', function (e) {
					x = sel[0].offset().left + half - (sel[1].offset().left + half), y = sel[0].offset().top + half - (sel[1].offset().top + half), atan2 = 57.33 * Math.atan2(y, x);
					sel[0].css({
						left: e.pageX - half + 'px',
						top: e.pageY - half + 'px'
					});
					line.css({
						left: sel[1].offset().left + half,
						top: sel[1].offset().top + half,
						width: Math.sqrt(x * x + y * y),
						'-webkit-transform': 'rotate(' + atan2 + 'deg)',
						'-moz-transform': 'rotate(' + atan2 + 'deg)',
						'-ms-transform': 'rotate(' + atan2 + 'deg)',
						'-o-transform': 'rotate(' + atan2 + 'deg)',
						'transform': 'rotate(' + atan2 + 'deg)'
					}).addClass("bg-primary");
				});
			}
		};

		elasticLine();
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}