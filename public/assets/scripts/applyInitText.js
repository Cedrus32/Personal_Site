function applyInitText(element) {
	const isClosed = element.parentElement.hasAttribute("open");
	if (!isClosed) {
		let styleSwitch = element.parentElement.children[1].children[0].children[0];
		let animateSwitch = element.parentElement.children[1].children[1].children[0];
		const style = localStorage.getItem("style");
		const animate = localStorage.getItem("animate");
		styleSwitch.textContent = "theme: " + style;
		animateSwitch.textContent = "animate: " + animate;
	}
}
