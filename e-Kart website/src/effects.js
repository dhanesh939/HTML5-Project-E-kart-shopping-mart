$(document).ready(
	function ()
	{
		$('.nav li').hover(
			function ()
			{ //appearing on hover
				$('ul', this).fadeIn(200);
			},
			function ()
			{ //disappearing on hover
				$('ul', this).fadeOut(100);
			}
		);
	}
);