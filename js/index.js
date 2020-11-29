var avatar = document.getElementById('avatar');
var navbar = document.getElementById('navbar');
var navbarAlt = document.getElementById('navbar--alt');
var lastScrollY = window.scrollY;

window.addEventListener('scroll', function(e) {
	if (window.scrollY > avatar.offsetTop + avatar.offsetHeight) {
		if (window.scrollY - lastScrollY > 0) {
			navbarAlt.classList.remove('navbar--show');
			navbarAlt.classList.add('navbar--hide');
		}
		else {
			navbarAlt.classList.add('navbar--show');
			navbarAlt.classList.remove('navbar--hide');
		}
	} else {		
		navbarAlt.classList.add('navbar--hide');
	}

	window.lastScrollY = window.scrollY;
}, {passive: true})




