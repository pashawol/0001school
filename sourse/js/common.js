const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	},
	// /inputMask
	paddRight(elem) {
		var div = document.createElement('div');
		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';
		document.body.append(div);
		var padd = div.offsetWidth - div.clientWidth; // console.log(1);

		$(elem).css("paddingRight", padd);
		div.remove();
	},
	tinymce() {
		let defaultProp = {
			menubar: false,
			language: 'ru',
			language_url: 'js/langs/ru.js',
			plugins: [
				'advlist autolink lists link image charmap print preview anchor',
				'searchreplace visualblocks code fullscreen',
				'insertdatetime media table paste code help wordcount'
			],
			toolbar:
				`undo redo | bold italic underline strikethrough   `,
			content_css: [
				// '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
				// '//www.tiny.cloud/css/codepen.min.css',
				'./css/custom.css',
			]
		}
		tinymce.init({
			selector: 'textarea.textarea-block-js',
			// height: 216,
			...defaultProp
		});

		tinymce.init({
			selector: '.note-block__text--js',
			selector: '.note-block__text--js',
			// height: 216,
			...defaultProp,
			inline: true,

			valid_elements: 'div,p,strong,em,span[style],a[href]',
			valid_styles: {
				'*': 'font-size,font-family,color,text-decoration,text-align'
			},
			powerpaste_word_import: 'clean',
			powerpaste_html_import: 'clean',
			fixed_toolbar_container: '.mytoolbar'

		});

	},
	select2() {
		$(".custom-select-wrap").each(function () {
			var th = $(this)
			th.find('.custom-select-js').select2({
				dropdownParent: th
			});
		})
	},
	sticky() {


		$('.panel-block__head--js').scrollFix({

		})
		$('.footer-lesson').scrollFix({
			side: 'bottom'
		})

	},
	customScroll() {
		$(".custom-scroll-js").mCustomScrollbar({
			autoHideScrollbar: true,
			scrollbarPosition: "inside",
			scrollEasing: "linear",
			scrollInertia: 400,
		});
	}
};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.inputMask();
	JSCCommon.tinymce();
	JSCCommon.select2();
	JSCCommon.sticky();
	JSCCommon.customScroll();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/03.png);"></div>')
	// /добавляет подложку для pixel perfect


	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			// JSCCommon.closeMenu();

		}
	}

	$(window).resize(function () {
		heightses();
		$(".custom-scroll-js").mCustomScrollbar("update");
	});
	$(".accordion__toggle").click(function () {
		setTimeout(() => {

			$(".custom-scroll-js").mCustomScrollbar("update");
		}, 100);
	})
	heightses();

	// листалка по стр
	$("  .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});




	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)
	}

	JSCCommon.paddRight('.top-line');
	$(".sidebar__toggle").click(function () {
		$('.sidebar__toggle').toggleClass('on');
		$(".sidebar__inner").toggleClass("active");
		$("body").toggleClass("fixed");
		if ($("body").hasClass('fixed')) {
			JSCCommon.paddRight('body');
		}
		else {
			$("body").css({ "paddingRight": 0 })

		}
	})

	$(document).mouseup(function (e) {
		var container = $(".sidebar__inner");
		if (container.has(e.target).length === 0) {
			$(".sidebar__toggle").removeClass("on");
			// $("body").toggleClass("fixed");
			$(".sidebar__inner").removeClass("active");
			$("body, html").removeClass("fixed").css({ "paddingRight": 0 });
		}
	});

	$(".accordion__toggle").click(function () {
		$(this).toggleClass("active").next().slideToggle().toggleClass("active");
	})

	$('[data-toggle="tooltip"]').tooltip();


	const players = Array.from(document.querySelectorAll('.audio-js')).map(p => new Plyr(p));


	// // Expose player so it can be used from the console
	// window.player = player;

	$(document).on("click", ".edit-note--js", function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(".note-block__text--default").show();
			$(".note-block__text--edit").hide();
		}
		else {
			$(this).addClass("active");
			$(".note-block__text--default").hide();
			$(".note-block__text--edit").show();
		}
	})
	$(".droppable-section").each(function () {
		let th = $(this);
		let dragEl = th.find(".drag-element-js");
		let dropEl = th.find(".droppable-block");
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
			drop: function (event, ui) {
				$(ui.draggable).addClass('drug-in');
				let uiData = ui.draggable.data('name');
				$(this)
					.addClass("ui-state-highlight").attr("data-drop", `${uiData}`)
					.text(ui.draggable.text())
					.droppable("disable");
			},

			out: function (event, ui) {
				DrafEll($(this), ui.draggable);
			},
		});

		// удалить значение / вернуть на место 
		function DrafEll(drop, drag) {
			$(drag).removeClass('drug-in')
				.animate({
					"top": '0',
					"left": '0'
				});
			drop.removeClass("ui-state-highlight")
				.text('')
				.droppable("enable")
				.attr("data-drop", null);
		}
		$(document).on('click', '.ui-state-highlight', function () {
			var thData = $(this).attr("data-drop");
			DrafEll($(this), `[data-name="${thData}"]`);
		})
	})


	// соеденить блоки линией
	$(".row-two").each(function () {
		var th = $(this);
		let flag = true,
			line = th.find(".line"),
			x, y,
			atan2;
		let valideCLass = "valid-block";
		let invalideCLass = "invalid-block";
		let ParentLeft = th.offset().left;
		let ParentTop = th.offset().top;


		th.on('click', ".input-variant--left", function () {
			let thInputLeft = $(this);
			thInputLeft.find(".line").addClass('active');
			thInputLeft.addClass('active').siblings().removeClass('active').find(".line").removeClass('active');
			th.find('.input-variant--right:not(.valid-block)').removeClass('disabled');

		})


		th.on('mouseenter', '.input-variant--right:not(.valid-block)', function () {
			let thInputLeft = th.find(".input-variant--left.active");
			let thInputRight = $(this);
			let line = thInputLeft.find(".line.active")
			if (thInputLeft.hasClass("active") && !thInputLeft.hasClass(valideCLass)) {
				getPosition(thInputLeft, thInputRight, line);
			}
			// $(".line:not(.valid)").removeAttr("style")
		})
		th.on('click', '.input-variant--right', function () {
			let thInputLeft = th.find(".input-variant--left.active");
			let thInputRight = $(this);
			let line = thInputLeft.find(".line.active")
			thInputRight.addClass('active');

			getPosition(thInputLeft, thInputRight, line);

			getValid(thInputLeft, thInputRight, line);
			th.off('mouseleave', thInputRight.hasClass(valideCLass));

		})


		th.on('mouseleave', '.input-variant--right:not(.disabled)', function () {
			let thInputLeft = th.find(".input-variant--left.active");
			if (!$(this).hasClass(valideCLass) || !$(this).hasClass("invalid-block")) {

				thInputLeft.find('.line').attr('style', '');
			}
		})

		// получить позицию для линиии
		function getPosition(elem1, elem2, line) {
			if (flag) {
				let widthOne = elem1.width();
				let heightOne = elem1.height();
				let widthTwo = elem2.width();
				let left = elem1 + widthOne;
				let top = heightOne / 2;

				let p = Math.PI;
				x = -elem1.offset().left + (elem2.offset().left - widthTwo),
					y = -elem1.offset().top + (elem2.offset().top),
					atan2 = (180 / p) * Math.atan2(y, x);
				line.css({
					width: Math.sqrt(x * x + y * y),
					left: left,
					top: top,
					opacity: 1,
					'-webkit-transform': 'rotate(' + atan2 + 'deg)',
					'-moz-transform': 'rotate(' + atan2 + 'deg)',
					'-ms-transform': 'rotate(' + atan2 + 'deg)',
					'-o-transform': 'rotate(' + atan2 + 'deg)',
					'transform': 'rotate(' + atan2 + 'deg)',
				}).addClass("bg-primary");

				line.css({
					width: Math.sqrt(x * x + y * y),
					left: '100%',
					top: '50%',
					opacity: 1,
					'-webkit-transform': 'rotate(' + atan2 + 'deg)',
					'-moz-transform': 'rotate(' + atan2 + 'deg)',
					'-ms-transform': 'rotate(' + atan2 + 'deg)',
					'-o-transform': 'rotate(' + atan2 + 'deg)',
					'transform': 'rotate(' + atan2 + 'deg)',
				}).addClass("bg-primary");

			}
		}
		// скрыть линию
		function reset(line) {
			if (flag) {
				line.css({
					opacity: 0,
				});
			}
		}


		// праверить на правильность ответ
		function getValid(elem1, elem2, line) {
			if (elem1.data("id") == elem2.data("id")) {
				elem1.addClass(valideCLass).removeClass('active');
				elem2.addClass(valideCLass).removeClass('active');
				line.addClass("valid");
				function elemPosition(elem) {
					let parent = elem.parent();
					let elemH = elem.height();
					let elemTop = parent.height() - elemH;
					parent.height(parent.height());
					let promise = new Promise(function (resolve, reject) {
						line.css({
							width: 0,
						})
						elem.after(`<div class="remove-div" style="height:${elemH}px; margin-bottom:1rem"></div>`);
						elem.css({
							"top": elem.position().top,
							"position": "absolute",
							"z-index": "10",
						});
					})
					function getDown() {
						elem.animate({
							"top": elemTop,
						}, 1000);
						return false;
					}

					promise.then(getDown());

					promise.then($(".remove-div").animate({ "height": 0, "margin-bottom": 0 }, 1000, function () {
						elem.removeAttr('style').appendTo(parent);
						if (elem.hasClass("input-variant--left")) {
							console.log(1);
							line.css({
								width: 100,
								'-webkit-transform': 'rotate(' + 0 + 'deg)',
								'-moz-transform': 'rotate(' + 0 + 'deg)',
								'-ms-transform': 'rotate(' + 0 + 'deg)',
								'-o-transform': 'rotate(' + 0 + 'deg)',
								'transform': 'rotate(' + 0 + 'deg)',
							})
						}

					}));



				};

				setTimeout(() => {
					elemPosition(elem1);
					elemPosition(elem2);
				}, 500);
			}
			else {
				elem1.addClass(invalideCLass);
				elem2.addClass(invalideCLass);
				line.addClass("invalid");
				setTimeout(() => {
					elem1.removeClass(invalideCLass);
					elem2.removeClass(invalideCLass).removeClass("active");
					line.removeClass("invalid").attr('style', '');
					flag = true;
					// reset(line);
				}, 1000);
			}

		}


	})
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}