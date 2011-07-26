//ModalPop
//Author: Owain Lewis
//Author URL: www.Owainlewis.com
//Simple Modal Dialog for $
//The idea here was to keep this plugin as lightweight and easy to customize as possible
//You are free to use this plugin for whatever you want.
//If you enjoy this plugin, I"d love to hear from you

(function() {

$.fn.center = function () {
  this.css("position","absolute");
  this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
  this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
  return this;
}

$.fn.modalpop = function(options) {

	var defaults = {
		speed: 500
	};

	var options = $.extend(defaults, options);
	var width = $(window).width();
	//Get the full page height including the scroll area
	var height = $(document).height();
	$("body").prepend("<div id=\"overlay\"></div>");
	$("#overlay").css("height", height);
	$("#overlay").css("width", width);

	return this.each(function() {
	  var selcector = $(this).attr("href");
    var id = $(selcector);

		$(this).click(function() {
		  id.center();
			$("#overlay, " + selcector).fadeIn(options.speed);
			return false;
		});

		$(".close, #overlay").click(function(){
			id.fadeOut(options.speed, function() {
			  $("#overlay").toggle();
			});
			return false;
		});

	});
};

})($);

