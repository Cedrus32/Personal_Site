function setAnimate(action) {
	let images = document.querySelectorAll(".freeze img, img.freeze");
	if (action === "off") {
		images.forEach((img) => (img.src = img.src.slice(0, -3) + "png"));
	} else if (action === "on") {
		images.forEach((img) => (img.src = img.src.slice(0, -3) + "gif"));
	}
}

function toggleAnimate() {
	let animate = localStorage.getItem("animate");
	if (animate === "on") {
		animate = "off";
	} else if (animate === "off") {
		animate = "on";
	}

	setAnimate(animate);
	localStorage.setItem("animate", animate);
	let animateSwitch = document.querySelector("#animate-switch");
	animateSwitch.textContent = "animate: " + animate;
}
