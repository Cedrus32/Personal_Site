function changeStyle(style) {
	if (style === "toggle") {
		// toggle style
		style = localStorage.getItem("style");
		if (style === "light") {
			style = "dark";
		} else if (style === "dark") {
			style = "light";
		}
	} else if (style == null) {
		// check local storage
		style = localStorage.getItem("style");
		if (style == null) {
			// check system preference
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				style = "dark";
			} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
				style = "light";
			} else {
				style = "light";
			}
		}
	}

	document.querySelector("#theme").setAttribute("href", "/assets/css/" + style + ".css");
	localStorage.setItem("style", style);
}

changeStyle();
