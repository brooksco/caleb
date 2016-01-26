// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var x = 0;
var total = 2;
// var songs = ['audio/highwaterrising.mp3', 'audio/mondaystorms.mp3'];
var songs = [
	['mondaystorms.mp3', 'clouds.jpg'],
	['highwaterrising.mp3', 'shoes.jpg']
];

$( document ).ready(function() {


	function preloadImages(array) {
	    if (!preloadImages.list) {
	        preloadImages.list = [];
	    }
	    for (var i = 0; i < array.length; i++) {
	        var img = new Image();
	        img.src = array[i][1];
	        preloadImages.list.push(img);
	    }
	}
	preloadImages(songs);

	// alert('window width: ' + $(window).width() + 'window height: ' + $(window).height() );
	// alert('outerWidth ' + $('#audio-controls').outerWidth() + 'outerHeight ' + $('#audio-controls').outerHeight())
	$('#audio-controls').css({
        top: ($(window).height() - $('#audio-controls').outerHeight())/2
    });
    //         left: ($(window).width() - $('#audio-controls').outerWidth())/2,

  	$('#audio').bind('ended', function() {
  		// alert('ended');
  		if (x == (total - 1)) {
  			$('.fa-pause').hide();
			$('.fa-play').show();
  		} else {
  			x += 1;

			if (x == (total - 1) ) {
				$('.fa-step-forward').addClass('deactivate');
			}  			

  			$('#source').attr('src', 'audio/' + songs[x][0]);
  			$('body').css('background', 'url(img/' + songs[x][1] + ') no-repeat center center fixed');
			$('body').css('background-size', 'cover');
  			$('#audio').load();
  		}

	});


	// $("#audio").on('play', function(){
 //    	alert('herehere');
	// });

	$("#audio")[0].onplay = function () {
		// x += 1;
    	$('.fa-play').hide();
		$('.fa-pause').show();	
	};

	$('.fa-pause').on('click', function() {
		$('#audio').trigger('pause');
		$('.fa-pause').hide();
		$('.fa-play').show();
	})

	$('.fa-play').on('click', function() {
		$('#audio').trigger('play');	
	})

	$('.fa-step-forward').on('click', function() {
		if (x == (total - 2) ) {
			$('.fa-step-forward').addClass('deactivate');
		}

		if (x == (total - 1) ) {
			// alert('minus one');
		} else {
			x += 1;
			$('#source').attr('src', 'audio/' + songs[x][0]);
			$('body').css('background', 'url(img/' + songs[x][1] + ') no-repeat center center fixed');
			$('body').css('background-size', 'cover');
  			
  			$('#audio').load();
  		}
	})

	$('.fa-step-backward').on('click', function() {
		if (x == 0 ) {
			$('#audio').load();
		} else {
			x -= 1;
			$('#source').attr('src', 'audio/' + songs[x][0]);
			$('body').css('background', 'url(img/' + songs[x][1] + ') no-repeat center center fixed');
			$('body').css('background-size', 'cover');
			$('.fa-step-forward').removeClass('deactivate');
  			
  			$('#audio').load();
  			// $('body').css('background', 'url(img/shoes.jpg) no-repeat center center fixed');
  		}
	})



});

$(window).resize(function(){
    $('#audio-controls').css({
        top: ($(window).height() - $('#audio-controls').outerHeight())/2
    });

});

// To initially run the function:
