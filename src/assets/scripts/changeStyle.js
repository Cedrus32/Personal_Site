function changeStyle(style) {
	if (style === "toggle") {
		// toggle style
		style = localStorage.getItem("style");
		if (style === "light") {
			style = "dark";
		} else if (style === "dark") {
			style = "light";
		}
	}

	document.querySelector("#theme").setAttribute("href", "/assets/css/" + style + ".css");
	// let switchButton = document.querySelector("#switch");
	// if (switchButton) {
	// 	switchButton.textContent = "theme: " + style;
	// }
	localStorage.setItem("style", style);
}
