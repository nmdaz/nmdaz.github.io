var avatar = document.getElementById('avatar');
var navbar = document.getElementById('navbar');
var lastScrollY = window.scrollY;

window.addEventListener('scroll', function(e) {
	if (window.scrollY > avatar.offsetTop + avatar.offsetHeight) {
		if (window.scrollY - lastScrollY > 0) navbar.classList.remove('navbar--alt');
		else navbar.classList.add('navbar--alt');
	} else {
		navbar.classList.remove('navbar--alt');
	}

	window.lastScrollY = window.scrollY;
}, {passive: true})



