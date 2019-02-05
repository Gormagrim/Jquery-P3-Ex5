$(function(){
	$('#keys').keydown(function(event){
		var squareOnBorder = $('#square').position().left;
		var squareOnBorderTop = $('#square').position().top;
		var maxWindowWidth = $(window).width();
		var maxWindowHeight = $(window).height();
		// console.log(squareOnBorder);
	// 	if (event.which == 37){
	// 		if(squareOnBorder > 0){
	// 		$('#square').animate({'left':'-=10px'}, 'fast');
	// 	}	else if (squareOnBorder < 0 && squareOnBorder >= -10){
	// 		$('.square2').css('left',maxWindow).addClass('color');
	// 		$('.square2').animate({'left':'-=10px'}, 'fast');
	// 		$('#square').animate({'left':'-=10px'}, 'fast');
	// 	}else if (squareOnBorder <= -10){
	// 		$('.square2').animate({'left':'-=10px'}, 'fast');
	// 		$('#square').animate({'left':'-=10px'}, 'fast');
	// 	}
	// 	}else if (event.which == 39 ){
	// 		if(squareOnBorder < maxWindow){
	// 		$('#square').animate({'left':'+=10px'}, 'fast');
	// 	} else if(squareOnBorder > maxWindow){
	// 		$('.square2').css('left',0).addClass('color');
	// 		$('.square2').animate({'left':'+=10px'}, 'fast');
	// 		$('#square').animate({'left':'+=10px'}, 'fast');
	// 	}
	// }

			//SOLUTION SIMPLE
			if (event.which == 37){
				if(squareOnBorder < 0){
					$('#square').css('left',maxWindowWidth)
				}else{
			$('#square').animate({'left':'-=10px'}, 'fast');
			}}else if (event.which == 39){
				if(squareOnBorder > maxWindowWidth){
					$('#square').css('left',0);
				}else{
			$('#square').animate({'left':'+=10px'}, 'fast');
			}}else if (event.which == 38){
				if(squareOnBorderTop < 0){
					$('#square').css('top',maxWindowHeight);
				}else{
			$('#square').animate({'top':'-=10px'}, 'fast');
			}}else if (event.which == 40){
				if(squareOnBorderTop > maxWindowHeight){
					$('#square').css('top',0);
			}else {
				$('#square').animate({'top':'+=10px'}, 'fast');
			}}
	});
});
