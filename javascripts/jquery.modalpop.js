//ModalPop
//Author: Owain Lewis
//Author URL: www.Owainlewis.com
//Simple Modal Dialog for jQuery
//The idea here was to keep this plugin as lightweight and easy to customize as possible
//You are free to use this plugin for whatever you want.
//If you enjoy this plugin, I"d love to hear from you

(function() {

jQuery.fn.modalpop = function(options) {

	var defaults = {
		speed: 500,
		center: false
	};

	var options = $.extend(defaults, options);
	var width = $(window).width();
	//Get the full page height including the scroll area
	var height = $(document).height();
	jQuery("body").prepend("<div id=\"overlay\"></div>");
	jQuery("#overlay").css("height", height);
	jQuery("#overlay").css("width", width);

	return this.each(function() {
    var id = jQuery(this).attr("href");

		jQuery(this).click(function() {
			//Set the popup window to center if required
			if (defaults.center == true) {
				$(id).css("top",  height/2-$(id).height()/2);
			} else {
				$(id).css("top",  200);
			}
			$(id).css("left", width/2-$(id).width()/2);
			jQuery("#overlay").fadeIn(options.speed);
			jQuery(id).fadeIn(options.speed);
			return false;
		});

		jQuery(".close, #overlay").click(function(){
			jQuery(id).fadeOut(options.speed, function() {
			  jQuery("#overlay").toggle();
			});
			return false;
		});

	});
};

})(jQuery);

