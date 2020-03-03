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
			language: 'de',
			language_url: 'js/langs/de.js',
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
				'css/custom.min.css',
			]
		}
		tinymce.init({
			selector: 'textarea.textarea-block-js',
			// height: 216,
			...defaultProp
		});

		// tinymce.init({
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

	},
	// кастомный селлект
	select2() {
		$(".custom-select-wrap").each(function () {
			var th = $(this)
			th.find('.custom-select-js').select2({
				dropdownParent: th,
				tags: true,
				minimumResultsForSearch: -1,
				// width: 'auto',
				// width: th.find(".select2-results__options"),
				allowClear: false,
		// dropdownAutoWidth: true
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
	ie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)
		}
	},
	tooltip(){
		$('[data-toggle="tooltip"]').tooltip();
	},
	
	player(){
		const players = Array.from(document.querySelectorAll('.audio-js')).map(p => new Plyr(p,{
			speed: 
				{ selected: 1, options: [  0.75, 1, 1.25, 1.5] }
		 ,
		}));
	},
	dragDrop(){
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
	
	},
	sortWords(){
		$(".sortable-section").each(function(){
			let _this = $(this);
			let line =  _this.find(".line-block");
			let elem = _this.find(".copy-element-js");
			let valideCLass = "valid-block";
			let invalideCLass = "invalid-block";
		 
			
			_this.on('mouseleave','.copy-element-js:not(.active)', function(){
			 
					$(this).removeClass(`${invalideCLass}`).removeClass(`${valideCLass}`); 
			}) 
		
			_this.on("click",'.copy-element-js:not(.active)', function(){
				let valid  = $(this).data("valid");
				if (valid){ 
					$(this).addClass(`${valideCLass}`);
				}
				else {
					$(this).addClass(`${invalideCLass}`);
					
				}
				$(this).addClass(`active `).clone().appendTo(line);  
						setTimeout(() => {
							
							$(this).removeClass(valideCLass).removeClass(invalideCLass);
						}, 200);
				 
			}) 
			_this.on("click",'.copy-element-js.active', function(){
				var elemData = $(this).data("name");
				_this.find(".line-block").find(`[data-name="${elemData}"]`).remove();
			 
				$(`[data-name="${elemData}"]`).removeClass("active");
			});
		})
	},
	sortBlock(){
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


		th.on('click', ".input-variant--left:not(.disabled):not(" + valideCLass + ")", function () {
			let thInputLeft = $(this);
			if (!thInputLeft.hasClass(valideCLass)) {
				thInputLeft.find(".line").addClass('active');
				thInputLeft.addClass('active').siblings().removeClass('active').find(".line").removeClass('active');
				th.find('.input-variant--right:not(' + valideCLass + ')').removeClass('disabled');
				th.on('mouseenter', '.input-variant--right:not(' + valideCLass + ')', function () {
					let thInputLeft = th.find(".input-variant--left.active");
					let thInputRight = $(this);
					let line = thInputLeft.find(".line.active")
					if (thInputLeft.hasClass("active") && !thInputLeft.hasClass(valideCLass)) {
						getPosition(thInputLeft, thInputRight, line);
					}
					// $(".line:not(.valid)").removeAttr("style")
				})
			}
		})


		th.on('click', '.input-variant--right:not(' + valideCLass + ')', function () {
			let thInputLeft = th.find(".input-variant--left.active");
			let thInputRight = $(this);
			let line = thInputLeft.find(".line.active")
			thInputRight.addClass('active');

			if (!thInputLeft.hasClass(valideCLass)) {
				getPosition(thInputLeft, thInputRight, line);

				getValid(thInputLeft, thInputRight, line);

				th.off('mouseleave mouseenter', thInputRight.hasClass(valideCLass));
			}

		})


		th.on('mouseleave', '.input-variant--right:not(.disabled):not(' + valideCLass + ')', function () {
			let thInputLeft = th.find(".input-variant--left.active");
			if (!$(this).hasClass(valideCLass) || !$(this).hasClass("invalid-block")) {

				thInputLeft.find('.line').attr('style', '');
			}
		})

		// получить позицию для линиии
		function getPosition(elem1, elem2, line) {
			if (flag) {

				let widthOne = elem1.width() || null;
				let heightOne = elem1.height() || null;
				let elem1Left = elem1.offset().left || null;
				let elem2Left = elem2.offset().left || null;
				let widthTwo = elem2.width();
				let left = elem1 + widthOne;
				let top = heightOne / 2;
				let p = Math.PI;
				if( elem1Left){

					x = -elem1Left + (elem2Left - widthTwo),
					y = -elem1.offset().top + (elem2.offset().top),
					atan2 = (180 / p) * Math.atan2(y, x);
					line.css({
						width: Math.sqrt(x * x + y * y), 
						opacity: 1,
					'-webkit-transform': 'rotate(' + atan2 + 'deg)',
					'-moz-transform': 'rotate(' + atan2 + 'deg)',
					'-ms-transform': 'rotate(' + atan2 + 'deg)',
					'-o-transform': 'rotate(' + atan2 + 'deg)',
					'transform': 'rotate(' + atan2 + 'deg)',
				}).addClass("bg-primary");
			}
				
				
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


		// праверить на правильность ответ   и изменить позицию
		function getValid(elem1, elem2, line) {
			if (elem1.data("id") == elem2.data("id")) {
				elem1.addClass(valideCLass).removeClass('active');
				elem2.addClass(valideCLass).removeClass('active');
				elem2.siblings().addClass('disabled');
				line.addClass("valid");
				th.off('click mouseenter mouseleave', elem1);
				th.off('click mouseenter mouseleave', elem2);
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
							"top": elemTop - 16,
						}, 1000);
						return false;
					} 
					promise.then(getDown()); 
					promise.then($(".remove-div").animate({ "height": 0, "margin-bottom": 0 }, 1000, function () {
						elem.removeAttr('style').appendTo(parent);
						if (elem.hasClass("input-variant--left")) {
						 
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
				elem2.siblings().addClass('disabled');
				setTimeout(() => {
					elem1.removeClass(invalideCLass);;
					elem2.siblings().removeClass('disabled');
					elem2.removeClass(invalideCLass).removeClass("active ");
					elem2.siblings().removeClass('disabled');
					line.removeClass("invalid").attr('style', '');
					flag = true;
					// reset(line);
				}, 1000);
			}

		}


	})
	// /соеденить блоки линией
	}

	// customScroll() {
	// 	$(".custom-scroll-js").mCustomScrollbar({
	// 		autoHideScrollbar: true,
	// 		scrollbarPosition: "inside",
	// 		scrollEasing: "linear",
	// 		scrollInertia: 400,
	// 	});
	// }
};
 

$( document ).ready( function()  {
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
	JSCCommon.paddRight('.top-line');
	JSCCommon.ie();
	JSCCommon.tooltip();
	JSCCommon.player();
	JSCCommon.dragDrop(); 
	JSCCommon.sortWords();
	JSCCommon.sortBlock();
	// JSCCommon.customScroll();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/10.png);"></div>')
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
	});
 
	heightses();

	// листалка по стр
	$("  .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});


	// кнопка показать еще
	$(".load-more").click(function(){
		$(this).hide().parent().find('.test-item:hidden').css('display', 'block');
	});




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
 
 

});
 