/*********************************************************************************

	Template Name: Avone Multipurpose eCommerce Bootstrap4 Template
	Description: A perfect template to build beautiful and unique Glasses websites. It comes with nice and clean design.
	Version: 1.0

**********************************************************************************/

/*************************************************
	1. Preloader Loading
	2. Promotional Bar Header
	3. Top Bar Slider Header
	4. Header Search Drawer
	5. Setting Box dropdown
	6. Masonry Collection Banners
	7. Sticky Header
	8. Mobile Main Menu
	10. Promotion / Notification Cookie Bar 
	11. Skick Slider
		11.1 Homepage Slideshow
		11.2 Sidebar Product
		11.3 Category Slideshow Slider
		11.4 Products Slider
		11.5 Products Slider Style2 3 Items
		11.6 Products Slider Style3
		11.7 Products Slider Fullwidth
		11.8 Product Page
		11.9 Collection Slider
		11.10 Latest Blog Slider
		11.11 Logo Slider
		11.12 Testimonial Slider
	12. Sidebar Categories Level links
	13. Price Range Slider
	14. Color Swacthes
	15. Footer links for mobiles
	16. Site Animation
	17. Show hide Product Tags
	18. SHOW HIDE PRODUCT Filters
	19. Timer Count Down
	20.Scroll Top
	21. Height Product Grid Image
	22. Product Zoom
	23. Product Detail Slider
	24. Product Sticky Bottom Cart
	25. Product Page Popup
	26. Quantity Plus Minus
	27. Visitor Fake Message
	28. Tabs With Accordian Responsive
	29. Product Tabs
	30. Image to background js
	31. Sticky Product Slider
	32. Related Product Slider
	33. Infinite Scroll js
	34. QuickView Popup
	
*************************************************/

(function ($) {
	// Start of use strict
	'use strict';
	
	/*-------------------------------
	 19. Timer Count Down
	----------------------------------*/
	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<span class="ht-count days"><span class="count-inner"><span class="time-count">%-D</span> <span>Days</span></span></span> <span class="ht-count hour"><span class="count-inner"><span class="time-count">%-H</span> <span>HR</span></span></span> <span class="ht-count minutes"><span class="count-inner"><span class="time-count">%M</span> <span>Min</span></span></span> <span class="ht-count second"><span class="count-inner"><span class="time-count">%S</span> <span>Sc</span></span></span>'));
		});
	});
	
    
	

})(jQuery);
