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
				'//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
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
			scrollbarPosition: "inside"

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
	// $(".audio-js").each(function () {

	// 	const player = new Plyr($(this), {});
	// })

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

	$(".row-two").each(function () {
		var th = $(this)


		const elasticLine = () => {
			let one = th.find(".connect-dot-left-js"),
				two = th.find(".connect-dot-right-js"),
				line = th.find(".line"),
				half = one.width() / 2,
				x, y,
				atan2,
				sel = [one, two];
			$(".row-two").on("click", one, function () {

				x = (sel[0].offset().left) - (th.offset().left),
					y = (sel[0].offset().top) - (th.offset().top),
					atan2 = 57.33 * Math.atan2(y, x);
				console.log(x, y);
				line.css({
					left: x,
					top: y,
					width: Math.sqrt(x * x + y * y),
					'-webkit-transform': 'rotate(' + atan2 + 'deg)',
					'-moz-transform': 'rotate(' + atan2 + 'deg)',
					'-ms-transform': 'rotate(' + atan2 + 'deg)',
					'-o-transform': 'rotate(' + atan2 + 'deg)',
					'transform': 'rotate(' + atan2 + 'deg)',

				}).addClass("bg-primary");
			})

			one.on("mousedown", () => { sel = [one, two], main() });
			two.on("mousedown", () => { sel = [two, one], main() });

			$(window).on('selectstart', () => false);
			$(window).on('mouseup', () => $(window).off("mousemove"));

			function main() {
				$(window).on('mousemove', e => {
					x = sel[0].offset().left + half - (sel[1].offset().left + half),
						y = sel[0].offset().top + half - (sel[1].offset().top + half),
						atan2 = 57.33 * Math.atan2(y, x);
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
						'transform': 'rotate(' + atan2 + 'deg)',

					}).addClass("bg-primary");
				});
			}
		}

		elasticLine();
	})
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}