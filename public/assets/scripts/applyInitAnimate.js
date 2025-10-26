function setPref() {
	if (sessionStorage.getItem("sessionAnimate") == null) {
		alignPrefs(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	}

	// check for session preference
	// if none (first page load of session)...
	// ...align session/system prefs
}

function applyPref() {
	let sysPrefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (sessionStorage.getItem("sysPrefersReduce") !== sysPrefersReduce.toString()) {
		alignPrefs(sysPrefersReduce);
	}
	if (sessionStorage.getItem("sessionAnimate") === "off") {
		let images = document.querySelectorAll(".freeze img, img.freeze");
		images.forEach((img) => (img.src = img.src.slice(0, -3) + "png"));
	}

	// check if stored system preference matches current system preference
	// if not (preference changed during browsing session)...
	// ...align session/system prefs
	// if session prefers animations off...
	// ...change all gifs to pngs
}

function alignPrefs(sysPrefersReduce) {
	let sessionAnimate;
	if (sysPrefersReduce) {
		sessionAnimate = "off";
	} else {
		sessionAnimate = "on";
	}
	sessionStorage.setItem("sessionAnimate", sessionAnimate);
	sessionStorage.setItem("sysPrefersReduce", sysPrefersReduce);

	// get system preference
	// match session animation/system reduce preference
	// set both vars in session storage
}

function applyInitAnimate() {
	setPref();
	applyPref();

	let animateSwitch = document.getElementById("animate-switch");
	console.log(animateSwitch);

	// set session animate/system reduce preference
	// apply preference to images
}

applyInitAnimate(); // runs on each page load
