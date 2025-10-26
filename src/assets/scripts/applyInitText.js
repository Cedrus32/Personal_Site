function applyInitText() {
	let root = document.getElementById("options-close");
	let styleSwitch = root.parentElement.children[1].children[0].children[0];
	let animateSwitch = root.parentElement.children[1].children[1].children[0];
	let fontSwitch = root.parentElement.children[1].children[2].children[0].children[1].children;
	const style = localStorage.getItem("style");
	const animate = sessionStorage.getItem("sessionAnimate");
	const font = localStorage.getItem("font");
	styleSwitch.textContent = "theme: " + style;
	animateSwitch.textContent = "animate: " + animate;
	fontSwitch.namedItem(font).selected = true;
}

applyInitText();
