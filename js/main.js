$(document).ready(function() {
	$('.accordeon__trigger').on('click', function(e){
		event.preventDefault();
	
	var $this = $(this),
		item = $this.closest('.accordeon__item'),
		list = $this.closest('.accordeon__list'),
		items = list.find('.accordeon__item'),
		content = item.find('.accordeon__inner'),
		otherContent = list.find('.accordeon__inner'),
		duration = 300;

		if(!item.hasClass('active')) {
				items.removeClass('active');
				item.addClass('active');

				otherContent.stop(true, true).slideUp(duration);
				content.stop(true, true).slideDown(duration);
			} else {
				content.stop(true, true).slideUp(duration);
				item.stop(true, true).removeClass('active');
			}
		

	});
});

//JQUERY UI
$(document).ready(function() {
	$( "#slider" ).slider();
});
