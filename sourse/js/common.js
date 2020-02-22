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

		tinymce.init({
			selector: 'textarea.textarea-block',
			height: 216,
			menubar: false,
			language: 'ru',
			language_url: 'js/langs/ru.js',
			plugins: [
				'advlist autolink lists link image charmap print preview anchor',
				'searchreplace visualblocks code fullscreen',
				'insertdatetime media table paste code help wordcount'
			],
			toolbar:
				`undo redo | bold italic underline strikethrough  |  forecolor backcolor casechange permanentpen formatpainter removeformat `,
			content_css: [
				'//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
				'//www.tiny.cloud/css/codepen.min.css'
			]
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
		let topLineHeight = $(".top-line").height();
		var $sticky = $('.sidebar-right');
		$sticky.hcSticky({

			stickTo: '.col--right',
			responsive: true,
			bottomEnd: 30,
			top: topLineHeight + 30,

		});
		$(".accordion__toggle, .edit-note--js").click(function () {
			$sticky.hcSticky('update');
		});

		$('.footer-lesson').scrollFix({
			side: 'bottom'
		})
		// $('.sidebar-right').scrollFix({
		// 	// side: 'bottom'
		// 	topPosition: topLineHeight + 20,
		// })
	},
	customScroll() {
		$(".custom-scroll-js").mCustomScrollbar({
			autoHideScrollbar: true,


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
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/03.png);"></div>')
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

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}