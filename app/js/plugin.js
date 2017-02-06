; (function	($) {
	var moreOptionBtn = $('.more-option');
	var secondForm = $('.second-form');
	var searchButton = $('.search-button'); 

		moreOptionBtn.on('click', function () {
			secondForm.slideToggle();
			moreOptionBtn.toggleClass('open');
		});
		searchButton.on('click', function () {
			searchButton.toggleClass('search-on');
		});
})(jQuery);

// add select-box style
;(function($) {
$(function() {

  $('select').styler();

});
})(jQuery);