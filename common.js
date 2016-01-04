function toOutline() {
	$("html,body").animate({scrollTop:$('#outline').offset().top});
	showReturnButton();
	location.hash = 'outline';
};

function toMembers() {
	$("html,body").animate({scrollTop:$('#members').offset().top});
	showReturnButton();
	location.hash = 'members';
};

function toLocation() {
	$("html,body").animate({scrollTop:$('#location').offset().top});
	showReturnButton();
	location.hash = 'location';
};

function toMemories() {
	$("html,body").animate({scrollTop:$('#memories').offset().top});
	showReturnButton();
	location.hash = 'memories';
};

function home() {
	if ($('#return-top-button').css('opacity') === '0') {
		return;
	}
	$("html,body").animate({scrollTop:$('#top').offset().top});
	hideReturnButton();
};

function showReturnButton() {
	$('#return-top-button').removeClass('display-none');
	$('#return-top-button').css('opacity', '0.6');
};

function hideReturnButton() {
	$('#return-top-button').css('opacity', '0');
	setTimeout(function(){
		$('#return-top-button').addClass('display-none');
	}, 400);
};

$(window).load(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			showReturnButton();
		} else {
			hideReturnButton();
		}
	});
	$("html,body").animate({scrollTop:$('#top').offset().top});
});