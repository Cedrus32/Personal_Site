function changePref() {
	let sessionAnimate = sessionStorage.getItem("sessionAnimate");
	if (sessionAnimate === "on") {
		sessionStorage.setItem("sessionAnimate", "off");
	} else if (sessionAnimate === "off") {
		sessionStorage.setItem("sessionAnimate", "on");
	}
}

function applyPref() {
	let images = document.querySelectorAll(".freeze img, img.freeze");
	if (sessionStorage.getItem("sessionAnimate") === "off") {
		images.forEach((img) => (img.src = img.src.slice(0, -3) + "png"));
	} else if (sessionStorage.getItem("sessionAnimate") === "on") {
		images.forEach((img) => (img.src = img.src.slice(0, -3) + "gif"));
	}
}

function toggleAnimate() {
	changePref();
	applyPref();

	document.getElementById("animate-switch").textContent = "animate: " + sessionStorage.getItem("sessionAnimate");

	// change session preference in session storage
	// apply new session preference to images
	// reflect session preference in switch text
}
