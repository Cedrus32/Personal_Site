function applyInitStyle() {
	let style = localStorage.getItem("style");
	if (style == null) {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			style = "dark";
		} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
			style = "light";
		} else {
			style = "light";
		}
	}

	document.querySelector("#theme").setAttribute("href", "/assets/css/" + style + ".css");
	localStorage.setItem("style", style);
}

applyInitStyle();
