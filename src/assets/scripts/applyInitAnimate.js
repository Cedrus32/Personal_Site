function setAnimate(action) {
	let images = document.querySelectorAll(".freeze img, img.freeze");
	if (action === "off") {
		images.forEach((img) => (img.src = img.src.slice(0, -3) + "png"));
	} else if (action === "on") {
		images.forEach((img) => (img.src = img.src.slice(0, -3) + "gif"));
	}
}

function applyInitAnimate() {
	let animate = localStorage.getItem("animate");
	if (animate == null) {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			animate = "off";
		} else {
			animate = "on";
		}
	}

	setAnimate(animate);
	localStorage.setItem("animate", animate);
}

applyInitAnimate();
