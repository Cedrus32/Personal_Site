function applyInitText() {
	let root = document.getElementById("options-close");
	let animateSwitch = root.parentElement.children[1].children[1].children[0];
	let styleSwitch = root.parentElement.children[1].children[0].children[0];
	let fontSwitch = root.parentElement.children[1].children[2].children[0].children[1].children;
	const animate = sessionStorage.getItem("sessionAnimate");
	const style = sessionStorage.getItem("sessionStyle");
	const font = sessionStorage.getItem("sessionFont");
	animateSwitch.textContent = "animate: " + animate;
	styleSwitch.textContent = "theme: " + style;
	fontSwitch.namedItem(font).selected = true;
}

applyInitText();
