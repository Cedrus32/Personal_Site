function applyInitText(element) {
	const isClosed = element.parentElement.hasAttribute("open");
	if (!isClosed) {
		let styleSwitch = element.parentElement.children[1].children[0].children[0];
		let animateSwitch = element.parentElement.children[1].children[1].children[0];
		let fontSwitch = element.parentElement.children[1].children[2].children[0].children[1].children;
		const style = localStorage.getItem("style");
		const animate = localStorage.getItem("animate");
		const font = localStorage.getItem("font");
		styleSwitch.textContent = "theme: " + style;
		animateSwitch.textContent = "animate: " + animate;
		fontSwitch.namedItem(font).selected = true;
	}
}
