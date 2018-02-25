var prevs = document.getElementsByClassName('pic-mini');
var gallery = document.getElementsByClassName('gallery-content')[0];
var currentPic = 0;

for (var i = 0; i < prevs.length; i++) {
	prevs[i].addEventListener('click', function(e) {
		e.preventDefault();

		var imageHref = this.firstElementChild.getAttribute("href");
		var newImage = '<img src="' + imageHref + '" alt="">'

		prevs[currentPic].classList.remove("gallery-current");
		this.classList.add("gallery-current");

		for (var j = 0; j < prevs.length; j++){
			if(prevs[j] == this) {
				currentPic = j;
				break;
			}
		}

		gallery.innerHTML = newImage;
	});
}

document.getElementsByClassName('left-arrow')[0].addEventListener('click', function(e) {
	e.preventDefault();

	var j = currentPic-1;
	if (currentPic == 0) {
		j = prevs.length-1;
	}

	var imageHref = prevs[j].firstElementChild.getAttribute("href");
	var newImage = '<img src="' + imageHref + '" alt="">'

	prevs[currentPic].classList.remove("gallery-current");
	prevs[j].classList.add("gallery-current");

	currentPic = j;

	gallery.innerHTML = newImage;
});

document.getElementsByClassName('right-arrow')[0].addEventListener('click', function(e) {
	e.preventDefault();

	var j = currentPic+1;
	if (currentPic == prevs.length-1) {
		j = 0;
	}

	var imageHref = prevs[j].firstElementChild.getAttribute("href");
	var newImage = '<img src="' + imageHref + '" alt="">'

	prevs[currentPic].classList.remove("gallery-current");
	prevs[j].classList.add("gallery-current");

	currentPic = j;

	gallery.innerHTML = newImage;
});

var map = document.getElementsByClassName('map-content')[0];
var mapAddresses = document.getElementsByClassName('map-address');
var mapPointer = document.getElementsByClassName('map-icon');
var adresses = ["images/map/С.КОВАЛЕВСКОЙ.5.jpg", "images/map/ПР.ЛЕНИНА.51.jpg"];
var currentAdr = 0;


for (var i = 0; i < mapAddresses.length; i++) {
	mapAddresses[i].addEventListener('click', function(e) {

		for (var j = 0; j < mapAddresses.length; j++){
			if(mapAddresses[j] == this) {
				if (currentAdr == j) {return;}
				break;
			}
		}

		mapAddresses[currentAdr].classList.remove("current-address");
		this.classList.add("current-address");
		mapPointer[j].innerHTML = '<img src="images/marker-black.png" alt="">'
		mapPointer[currentAdr].innerHTML = '<img src="images/marker-white.png" alt="">'

		var newImage = '<img src="' + adresses[j] + '" alt="">';

		currentAdr = j;

		map.innerHTML = newImage;
	});
}

$('.mobile-nav-toggle').click(function() {
	if ($('.mobile-nav').css('display') == 'none') {
		$('.mobile-nav').css('display', 'block');
	} else {
		$('.mobile-nav').css('display', 'none');
	}
});

$('.mobile-nav a').click(function() {
	$('.mobile-nav').css('display', 'none');
});

$(window).resize(function() {
	if ($(window).width() > 768) {
		$('.mobile-nav').css('display', 'none');
	}
});

window.onscroll = function () {
    if ($(window).width() < 1600) {
        $('.up-wrapper').css('display', 'none');
        return;
    }
    if (window.pageYOffset > document.documentElement.clientHeight/2) {
        $('.up-wrapper').css('display', 'block');
    } else {
        $('.up-wrapper').css('display', 'none');
    }
}

$('.up-wrapper').click(function () {
    window.scrollTo(0, 0);
})
