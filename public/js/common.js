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
			language: 'de',
			language_url: 'js/langs/de.js',
			plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
			toolbar: "undo redo | bold italic underline strikethrough   ",
			content_css: ['css/custom.min.css']
		};
		tinymce.init(_objectSpread({
			selector: 'textarea.textarea-block-js'
		}, defaultProp));
	}),
	// кастомный селлект
	select2: function select2() {
		$(".custom-select-wrap").each(function () {
			var th = $(this);
			th.find('.custom-select-js').select2({
				dropdownParent: th,
				tags: true,
				minimumResultsForSearch: -1,
				// width: 'auto',
				// width: th.find(".select2-results__options"),
				allowClear: false // dropdownAutoWidth: true

			});
		});
	},
	sticky: function sticky() {
		$('.panel-block__head--js').scrollFix({});
		$('.footer-lesson').scrollFix({
			side: 'bottom'
		});
	},
	ie: function ie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
		}
	},
	tooltip: function tooltip() {
		$('[data-toggle="tooltip"]').tooltip();
	},
	player: function player() {
		var players = Array.from(document.querySelectorAll('.audio-js')).map(function (p) {
			return new Plyr(p, {
				speed: {
					selected: 1,
					options: [0.75, 1, 1.25, 1.5]
				}
			});
		});
	},
	dragDrop: function dragDrop() {
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
	},
	sortWords: function sortWords() {
		$(".sortable-section").each(function () {
			var _this = $(this);

			var line = _this.find(".line-block");

			var elem = _this.find(".copy-element-js");

			var valideCLass = "valid-block";
			var invalideCLass = "invalid-block";

			_this.on('mouseleave', '.copy-element-js:not(.active)', function () {
				$(this).removeClass("".concat(invalideCLass)).removeClass("".concat(valideCLass));
			});

			_this.on("click", '.copy-element-js:not(.active)', function () {
				var _this2 = this;

				var valid = $(this).data("valid");

				if (valid) {
					$(this).addClass("".concat(valideCLass));
				} else {
					$(this).addClass("".concat(invalideCLass));
				}

				$(this).addClass("active ").clone().appendTo(line);
				setTimeout(function () {
					$(_this2).removeClass(valideCLass).removeClass(invalideCLass);
				}, 200);
			});

			_this.on("click", '.copy-element-js.active', function () {
				var elemData = $(this).data("name");

				_this.find(".line-block").find("[data-name=\"".concat(elemData, "\"]")).remove();

				$("[data-name=\"".concat(elemData, "\"]")).removeClass("active");
			});
		});
	},
	sortBlock: function sortBlock() {
		// соеденить блоки линией
		$(".row-two:not(.row-two--result)").each(function () {
			var th = $(this);
			var flag = true,
					line = th.find(".line"),
					x,
					y,
					atan2;
			var valideCLass = "valid-block";
			var invalideCLass = "invalid-block";
			var ParentLeft = th.offset().left;
			var ParentTop = th.offset().top;
			th.on('click', ".input-variant--left:not(.disabled):not(" + valideCLass + ")", function () {
				var thInputLeft = $(this);

				if (!thInputLeft.hasClass(valideCLass)) {
					thInputLeft.find(".line").addClass('active');
					thInputLeft.addClass('active').siblings().removeClass('active').find(".line").removeClass('active');
					th.find('.input-variant--right:not(' + valideCLass + ')').removeClass('disabled');
					th.on('mouseenter', '.input-variant--right:not(' + valideCLass + ')', function () {
						var thInputLeft = th.find(".input-variant--left.active");
						var thInputRight = $(this);
						var line = thInputLeft.find(".line.active");

						if (thInputLeft.hasClass("active") && !thInputLeft.hasClass(valideCLass)) {
							getPosition(thInputLeft, thInputRight, line);
						} // $(".line:not(.valid)").removeAttr("style")

					});
				}
			});
			th.on('click', '.input-variant--right:not(' + valideCLass + ')', function () {
				var thInputLeft = th.find(".input-variant--left.active");
				var thInputRight = $(this);
				var line = thInputLeft.find(".line.active");
				thInputRight.addClass('active');

				if (!thInputLeft.hasClass(valideCLass)) {
					getPosition(thInputLeft, thInputRight, line);
					getValid(thInputLeft, thInputRight, line);
					th.off('mouseleave mouseenter', thInputRight.hasClass(valideCLass));
				}
			});
			th.on('mouseleave', '.input-variant--right:not(.disabled):not(' + valideCLass + ')', function () {
				var thInputLeft = th.find(".input-variant--left.active");

				if (!$(this).hasClass(valideCLass) || !$(this).hasClass("invalid-block")) {
					thInputLeft.find('.line').attr('style', '');
				}
			}); // получить позицию для линиии

			function getPosition(elem1, elem2, line) {
				if (flag) {
					var widthOne = elem1.width() || null;
					var heightOne = elem1.height() || null;
					var elem1Left = elem1.offset().left || null;
					var elem2Left = elem2.offset().left || null;
					var widthTwo = elem2.width();
					var left = elem1 + widthOne;
					var top = heightOne / 2;
					var p = Math.PI;

					if (elem1Left) {
						x = -elem1Left + (elem2Left - widthTwo), y = -elem1.offset().top + elem2.offset().top, atan2 = 180 / p * Math.atan2(y, x);
						line.css({
							width: Math.sqrt(x * x + y * y),
							opacity: 1,
							'-webkit-transform': 'rotate(' + atan2 + 'deg)',
							'-moz-transform': 'rotate(' + atan2 + 'deg)',
							'-ms-transform': 'rotate(' + atan2 + 'deg)',
							'-o-transform': 'rotate(' + atan2 + 'deg)',
							'transform': 'rotate(' + atan2 + 'deg)'
						}).addClass("bg-primary");
					}
				}
			} // скрыть линию


			function reset(line) {
				if (flag) {
					line.css({
						opacity: 0
					});
				}
			} // праверить на правильность ответ   и изменить позицию


			function getValid(elem1, elem2, line) {
				if (elem1.data("id") == elem2.data("id")) {
					var elemPosition = function elemPosition(elem) {
						var parent = elem.parent();
						var elemH = elem.height();
						var elemTop = parent.height() - elemH;
						parent.height(parent.height());
						var promise = new Promise(function (resolve, reject) {
							line.css({
								width: 0
							});
							elem.after("<div class=\"remove-div\" style=\"height:".concat(elemH, "px; margin-bottom:1rem\"></div>"));
							elem.css({
								"top": elem.position().top,
								"position": "absolute",
								"z-index": "10"
							});
						});

						function getDown() {
							elem.animate({
								"top": elemTop - 16
							}, 1000);
							return false;
						}

						promise.then(getDown());
						promise.then($(".remove-div").animate({
							"height": 0,
							"margin-bottom": 0
						}, 1000, function () {
							elem.removeAttr('style').appendTo(parent);

							if (elem.hasClass("input-variant--left")) {
								line.css({
									width: 100,
									'-webkit-transform': 'rotate(' + 0 + 'deg)',
									'-moz-transform': 'rotate(' + 0 + 'deg)',
									'-ms-transform': 'rotate(' + 0 + 'deg)',
									'-o-transform': 'rotate(' + 0 + 'deg)',
									'transform': 'rotate(' + 0 + 'deg)'
								});
							}
						}));
					};

					elem1.addClass(valideCLass).removeClass('active');
					elem2.addClass(valideCLass).removeClass('active');
					elem2.siblings().addClass('disabled');
					line.addClass("valid");
					th.off('click mouseenter mouseleave', elem1);
					th.off('click mouseenter mouseleave', elem2);
					;
					setTimeout(function () {
						elemPosition(elem1);
						elemPosition(elem2);
					}, 500);
				} else {
					elem1.addClass(invalideCLass);
					elem2.addClass(invalideCLass);
					line.addClass("invalid");
					elem2.siblings().addClass('disabled');
					setTimeout(function () {
						elem1.removeClass(invalideCLass);
						;
						elem2.siblings().removeClass('disabled');
						elem2.removeClass(invalideCLass).removeClass("active ");
						elem2.siblings().removeClass('disabled');
						line.removeClass("invalid").attr('style', '');
						flag = true; // reset(line);
					}, 1000);
				}
			}
		}); // /соеденить блоки линией
	},
	timer: function timer() {
		// var date = new Date();
		// var ye = date.getFullYear();
		// var m = date.getMonth() + 1;
		// var dat = date.getDate() + 2;
		// // var time = '00:00:00',
		// var timer = m + '/' + dat + '/' + ye + ' 00:00:00';
		$('.countdown--js').each(function () {
			$(this).downCount({
				date: $(this).data('timer'),
				// date: '12/27/2017 12:00:00',
				offset: +3
			});
		});
	},
	chart: function chart() {
		var ctx = document.getElementById('myChart');

		if (ctx) {
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					datasets: [{
						weight: 50,
						data: [30, 70],
						backgroundColor: ['#2746FF', '#F3F3F3']
					}]
				},
				options: {
					cutoutPercentage: 30,
					hover: {
						mode: null
					},
					tooltips: {
						enabled: false
					},
					responsive: true,
					animation: {
						animateScale: true,
						animateRotate: true
					}
				}
			});
		}
	} // customScroll() {
	// 	$(".custom-scroll-js").mCustomScrollbar({
	// 		autoHideScrollbar: true,
	// 		scrollbarPosition: "inside",
	// 		scrollEasing: "linear",
	// 		scrollInertia: 400,
	// 	});
	// }

};
$(document).ready(function () {
	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.inputMask();
	$.fn.datepicker; // JSCCommon.datepicker();

	JSCCommon.tinymce();
	JSCCommon.select2();
	JSCCommon.sticky();
	JSCCommon.paddRight('.top-line');
	JSCCommon.ie();
	JSCCommon.tooltip();
	JSCCommon.player();
	JSCCommon.dragDrop();
	JSCCommon.sortWords();
	JSCCommon.sortBlock();
	JSCCommon.timer();
	JSCCommon.chart(); // JSCCommon.customScroll();
	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect

	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/29.png);"></div>'); // /добавляет подложку для pixel perfect

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
	});
	heightses(); // листалка по стр

	$("  .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	}); //календарь

	var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
	var datepickerDef = {
		locale: 'ru-ru',
		uiLibrary: 'bootstrap4',
		minDate: today,
		showOnFocus: true,
		format: 'dd.mm.yyyy'
	};
	$('.datepicker-js').datepicker(_objectSpread({}, datepickerDef, {
		inline: true
	}));
	$(".date-picker-block-js").each(function () {
		var th = $(this);
		th.find('.startDate').datepicker(_objectSpread({}, datepickerDef, {
			maxDate: function maxDate() {
				return th.find('.endDate').val();
			}
		}));
		th.find('.endDate').datepicker(_objectSpread({}, datepickerDef, {
			minDate: function minDate() {
				return th.find('.startDate').val();
			}
		}));
	}); // кнопка показать еще

	$(".load-more").click(function () {
		$(this).hide().parent().find('.test-item:hidden').css('display', 'block');
	});
	var defSlider = {
		slidesPerView: 1,
		spaceBetween: 10,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		lazy: {
			loadPrevNext: true
		}
	}; // видео слайдер

	var videoSlider = new Swiper('.s-video__slider--js', _objectSpread({}, defSlider, {
		navigation: {
			nextEl: '.s-video__slider-next',
			prevEl: '.s-video__slider-prev'
		},
		breakpoints: {
			576: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 3
			}
		}
	})); // видео слайдер

	var slHW = new Swiper('.slider-js', _objectSpread({}, defSlider, {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		}
	}));
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
	$(".dropdown-menu").click(function (event) {
		event.stopPropagation();
	});
});