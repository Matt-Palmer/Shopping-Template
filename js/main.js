$(function(){

	$('.myButton').click(function () {
	    
	    console.log("button pressed");

	    if($('.overlay').hasClass('active-overlay')){

	    	$('.overlay').removeClass('active-overlay');

	    	$('.nav-item-container').removeClass('active-nav');

	    	$('body').css({overflow: 'auto'});


	    	if ($(window).scrollTop() > amountScrolled){

				$('.back-to-top').fadeIn('slow');

			}

	    	setTimeout(function(){
	    		$('.nav-item-container').css({display: 'none'});
	    		$('.overlay').css({height: '10vh'});
	    	}, 1000);

	    }else{

	    	$('.overlay').addClass('active-overlay');

	    	$('.nav-item-container').fadeIn().css({display: 'block'});

	    	$('.nav-item-container').addClass('active-nav');

	    	$('body').css({overflow: 'hidden'});

	    	$('.back-to-top').fadeOut('slow');

	    	setTimeout(function(){
	    		$('.overlay').css({height: '100vh'});
	    	}, 10);

	    }

   });

	$('.nav-container .custom-nav-item').click(function(){
		
		$('.overlay').removeClass('active-overlay');

	    $('.nav-item-container').removeClass('active-nav');

	    $('body').css({overflow: 'auto'});


	    if ($(window).scrollTop() > amountScrolled){

			$('.back-to-top').fadeIn('slow');

		}

	    setTimeout(function(){
	    	$('.nav-item-container').css({display: 'none'});
	    	$('.overlay').css({height: '10vh'});
	    }, 1000);

	     console.log("link pressed");
	     
	})

	var amountScrolled = 300;
	
	$(window).scroll(function(){
		if ($(window).scrollTop() > amountScrolled){

			$('.back-to-top').fadeIn('slow');

		}else{

			$('.back-to-top').fadeOut('slow');

		}
	});

	$('.back-to-top').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});

	
	
})