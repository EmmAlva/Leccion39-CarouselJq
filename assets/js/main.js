$(document).ready(function(){

	$(".next").on('click', function(){
		var currentImg = $(".active");
		var nextImg = currentImg.next();

		if(nextImg.length){
			currentImg.removeClass("active").css("z-index", -10);
			nextImg.addClass("active").css("z-index", 10);
		}
	});
	$(".prev").on('click', function(){
		var currentImg = $(".active");
		var prevImg = currentImg.prev();

		if(prevImg.length){
			currentImg.removeClass("active").css("z-index", -10);
			prevImg.addClass("active").css("z-index", 10);
		}
	});



	var SliderModule = (function(){
		var pb = {}; //objeto creado
		pb.el = $("#carousel"); //atributo el(elemento)
		pb.items = { //atributo items , paneles en un array
			panel: pb.el.find('li')
		}

		// Variables necesarias
		var SliderInterval,
			currentSlider = 0,
			nextSlider = 1,
			lengthSlider = pb.items.panel.length; //número de paneles

		// Inicializar 
		pb.init = function(settings){
			this.settings = settings || {duration: 5000}
			var output = '';
		// Activando carousel
		SliderInit();

		// Insertando botones
		for(var i = 0; i < lengthSlider; i++){
			if(i == 0){
				output += '<li class="active"></li>';
			}else{
				output += '<li></li>';
			}
		}
		// Controles del carousel

		$("#carousel-controls").html(output).on('click', 'li', function(e){
			var $this = $(this);
			if(currentSlider !== $this.index()){
				changePanel($this.index());
			};
		});
	}
	var SliderInit = function(){
		SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
	}
	pb.startSlider= function(){
		var panels = pb.items.panel,
			controls = $("#carousel-controls li");

		if(nextSlider >= lengthSlider){
			nextSlider = 0;
			currentSlider = lengthSlider-1;
		}

		// Efectos
		controls.removeClass("active").eq(nextSlider).addClass("active");
		panels.eq(currentSlider).fadeOut('slow');
		panels.eq(nextSlider).fadeIn('slow');

		// Actualizamos nuestros datos
		currentSlider = nextSlider;
		nextSlider += 1;
	}

	// Funcion para controladores
	var changePanel = function(id){
		clearInterval(SliderInterval);
		var panels = pb.items.panel,
			controls = $("#carousel-controls li");

		// Comprobamos el id
		if(id >= lengthSlider){
			id = 0;
		}
		else if(id < 0){
			id = lengthSlider-1;
		}
// Efectos
	controls.removeClass("active").eq(id).addClass("active");
	panels.eq(currentSlider).fadeOut('slow');
	panels.eq(nextSlider).fadeIn('slow');

		// Actualizamos los datos
		currentSlider = id;
		nextSlider= id +1;

		// Reactivar carousel
		SliderInit();
		}
		return pb;
	}());
	SliderModule.init({duration: 5000});
});





	// $("#btn-before").click(function(){


	// });
	// $("#btn-next").click(function(){
	// 	var size = $(".carousel-wrapper").find(".items").size;
	// 	$(".carousel-wrapper").find(".items").each(
	// 		function(index, value){
	// 		if($(value).hasClass("visible"))
	// 		{
	// 			$(value).slideUp();
	// 			$(value).removeClass("visible");

	// 			if(index+1<size){
	// 				$($(".carousel-wrapper").find(".items").get(index+1)).sliderDown();
	// 				$($(".carousel-wrapper").find(".items").get(index+1)).addClass("visible");
	// 			}
	// 			else{
	// 				$($(".carousel-wrapper").find(".items").get(0)).fadeOut();
	// 				$($(".carousel-wrapper").find(".items").get(0)).addClass("visible");


	// 			}
	// 		}
	// 	});
	// });
	
