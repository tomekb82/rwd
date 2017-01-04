(function($){
	$(document).ready(function(){

		(function(){
			var $slider = $('#header .slider');
			var $slides = $slider.find('.slide');
			var $currSlide = $slides.first();

			$slides.hide();
			$currSlide.show();

			$slider.find('.nav').click(function(){
				var $this = $(this);
				var $nextSlide;

				if($this.hasClass('prev')){
					$nextSlide = $currSlide.prev('.slide');
					if($nextSlide.size() < 1){
						$nextSlide = $slides.last();
					}
				}else{
					$nextSlide = $currSlide.next('.slide');
					if($nextSlide.size() < 1){
						$nextSlide = $slides.first();
					}
				}

				$currSlide.fadeOut('medium');
				$nextSlide.fadeIn('medium');

				$currSlide = $nextSlide;
			});
		})();
		

		
		(function(){
			
			var $slider = $('#section2 .slider');
			var $slidesContainer = $slider.find('.slides-container');
			var $slides = $slidesContainer.children();
			var $pagination = $slider.find('.pagination');
			
			var slidesCount = $slides.size();

			$pagination.empty();
			for(var i=0; i<slidesCount; i++){
				$pagination.append($('<li><span>'));
			}
			var $paginationItems = $pagination.find('li');

			$slidesContainer.css({
				'width': (slidesCount*100+'%'),
				'margin-left': '0%'
			});

			$slides.css('width', ((100/slidesCount)+'%'));

			$paginationItems.click(function(e){
				e.preventDefault();

				var $this = $(this);
				$pagination.find('li').removeClass('active');
				$this.addClass('active');

				var index = $this.index();

				var newPost = (index*-100);
	
				$slidesContainer.animate({'margin-left': (newPost+'%')}, 'slow');
			}).first().click();

		
		})();


	});
})(jQuery); 