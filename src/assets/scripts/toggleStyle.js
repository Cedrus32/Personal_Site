function toggleStyle() {
	let style = localStorage.getItem("style");
	if (style === "light") {
		style = "dark";
	} else if (style === "dark") {
		style = "light";
	}

	document.querySelector("#theme").setAttribute("href", "/assets/css/" + style + ".css");
	localStorage.setItem("style", style);
	let styleSwitch = document.querySelector("#style-switch");
	styleSwitch.textContent = "theme: " + style;
}
