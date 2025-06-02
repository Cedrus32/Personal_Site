function changeStyle(style) {
	if (style === "toggle") {
		style = localStorage.getItem("style");
		if (style === "light") {
			style = "dark";
		} else if (style === "dark") {
			style = "light";
		}
	} else if (style == null) {
		style = localStorage.getItem("style");
		if (style == null) {
			if (window.matchMedia) {
				if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
					style = "dark";
				} else {
					style = "light";
				}
			} else {
				style = "light";
			}
		}
	}

	document.querySelector("#theme").setAttribute("href", "/assets/css/" + style + ".css");
	localStorage.setItem("style", style);
}

changeStyle();
