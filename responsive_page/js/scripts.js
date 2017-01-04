(function($){
	$(document).ready(function(){
    
		(function(){
			var $bgSlider = $('header .bg-slider');
			var $slides = $bgSlider.find('.bg-slide');
			var $currSlide = $slides.first();
            
            var updateSlides = function(){
				var $this = $(this);
				var $nextSlide;

				if($this.hasClass('prev')){
					$nextSlide = $currSlide.prev('.bg-slide');
					if($nextSlide.size() < 1){
						$nextSlide = $slides.last();
					}
				}else{
					$nextSlide = $currSlide.next('.bg-slide');
					if($nextSlide.size() < 1){
						$nextSlide = $slides.first();
					}
				}

				$currSlide.fadeOut('medium');
				$nextSlide.fadeIn('medium');

				$currSlide = $nextSlide;
			};

			$slides.hide();
			$currSlide.show();

			$bgSlider.find('.nav').click(updateSlides);
            
            setInterval(updateSlides, 10000); 
        
        })();


	});
})(jQuery); 