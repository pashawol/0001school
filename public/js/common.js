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
			toolbar: "undo redo | bold italic underline strikethrough  | fullscreen ",
			content_css: [// '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
			// '//www.tiny.cloud/css/codepen.min.css',
			'./css/custom.min.css']
		};
		tinymce.init(_objectSpread({
			selector: 'textarea.textarea-block-js'
		}, defaultProp)); // tinymce.init({
		// 	selector: '.note-block__text--js', 
		// 	// block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3',
		// 	// height: 216,
		// 	...defaultProp,
		// 	inline: true,
		// 	valid_elements: 'div,p,strong,em,span[style],a[href]',
		// 	valid_styles: {
		// 		'*': 'font-size,font-family,color,text-decoration,text-align'
		// 	},
		// 	powerpaste_word_import: 'clean',
		// 	powerpaste_html_import: 'clean',
		// 	fixed_toolbar_container: '.mytoolbar',
		// 	quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote',
		// 	statusbar: false
		// });
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
			scrollbarPosition: "inside",
			scrollEasing: "linear",
			scrollInertia: 400
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
	JSCCommon.sticky(); // JSCCommon.customScroll();
	// JSCCommon.CustomInputFile();
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
		heightses(); // $(".custom-scroll-js").mCustomScrollbar("update");
	});
	$(".accordion__toggle").click(function () {// setTimeout(() => {
		// 	$(".custom-scroll-js").mCustomScrollbar("update");
		// }, 100);
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
	$('[data-toggle="tooltip"]').tooltip();
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
	}); // 	$('.drag-element-js').draggable({
	// 		connectToSortable: '.sortable-block-line',
	// 		helper: "clone"
	// });
	// $('.sortable-block-line').sortable({
	// 		connectWith: '.drag-block-line',
	// 		axis: "x"
	// });

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

			setTimeout(function () {
				$(_this2).addClass("active ").clone().appendTo(line);
				$(_this2).removeClass(valideCLass).removeClass(invalideCLass);
			}, 500);
		});

		_this.on("click", '.copy-element-js.active', function () {
			var elemData = $(this).data("name");

			_this.find(".line-block").find("[data-name=\"".concat(elemData, "\"]")).remove();

			$("[data-name=\"".concat(elemData, "\"]")).removeClass("active");
		});
	}); // соеденить блоки линией

	$(".row-two").each(function () {
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
		} // праверить на правильность ответ


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
							console.log(1);
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
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}