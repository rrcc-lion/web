
function dropdownContainers() {
	
	
	 // esc
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$(".dd_option_panel").hide();
			$('.dd_link').removeClass('active');	
		}  
	});
	
	// Show and Hide the Options Panels
	$('.dd_link').click(function() {
		var selected_panel = ('#') + $(this).attr('id') + ('_options');
		
		if($(selected_panel).css('display') == 'none'){
			// Remove Existing Active Styling and Apply to current Item
			$('.dd_link').removeClass('active');
			$(this).addClass('active');
			// Hide exisiting open dropdowns and show selected one
			$('.dd_option_panel').hide();
			$(selected_panel).show();
			// Set Focus to the close button within the options panel
			$(selected_panel).children('.dd_close_panel').children('a').focus();
		} else {
			$(selected_panel).hide();
			$('.dd_link').removeClass('active');
		}
	});
	
	// Close the options panel when you click the link
	$(".dd_close_panel a").click(function() {
		// Apply focus to the link associated with the panel
		$(this).parent().parent().parent().children('a').focus();
		$(this).parent().parent().parent().children('a').removeClass('active');
		// Hide the panel when you click close
		$(".dd_option_panel").hide();
	});
};
	
	
function resizeFonts() {
	
	var originalSize = $('body').css('font-size');
	// reset
	$("#font_reset").click(function(){
		$('body').css('font-size', originalSize); 
	});
	
	// Increase Font Size
	$("#font_increase").click(function(){
		var currentSize = $('body').css('font-size');
		var currentSize = parseFloat(currentSize)*1.2;
		$('body').css('font-size', currentSize);
		return false;
	});
	
	// Decrease Font Size
	$("#font_decrease").click(function(){
		var currentFontSize = $('body').css('font-size');
		var currentSize = $('body').css('font-size');
		var currentSize = parseFloat(currentSize)*0.8;
		$('body').css('font-size', currentSize);
		return false;
	});
};



$(document).ready(function(){
	var FF = !(window.mozInnerScreenX == null);
	if (FF) {
		$('select').addClass('moz_custom');
	}
});

