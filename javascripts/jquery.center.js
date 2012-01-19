/***
@title:
Center

@version:
2.0

@author:
Andreas Lagerkvist

@date:
2008-09-17

@url:
http://andreaslagerkvist.com/jquery/center/

@license:
http://creativecommons.org/licenses/by/3.0/

@copyright:
2008 Andreas Lagerkvist (andreaslagerkvist.com)

@requires:
jquery

@does:
This little pluggy centers an element on the screen using either fixed or absolute positioning. Can be used to display messages, pop up images etc.

@howto:
jQuery('#my-element').center(true); would center the element with ID 'my-element' using absolute position (leave empty for fixed).

@exampleHTML:
<p>I should be fixed centered</p>

<p>The paragraph above and the paragraph beneath this one are centered. They should be in the middle of the viewport.</p>

<p>I should be absolutely centered</p>

@exampleJS:
jQuery('#jquery-center-example p:first-child').center();
jQuery('#jquery-center-example p:last-child').center(true);
***/
jQuery.fn.center = function (absolute) {
	return this.each(function () {
		var t = jQuery(this);

		t.css({
			position:	absolute ? 'absolute' : 'fixed', 
			left:		'50%', 
			top:		'50%', 
			zIndex:		'99'
		}).css({
			marginLeft:	'-' + (t.outerWidth() / 2) + 'px', 
			marginTop:	'-' + (t.outerHeight() / 2) + 'px'
		});

		if (absolute) {
			t.css({
				marginTop:	parseInt(t.css('marginTop'), 10) + jQuery(window).scrollTop(), 
				marginLeft:	parseInt(t.css('marginLeft'), 10) + jQuery(window).scrollLeft()
			});
		}
	});
};