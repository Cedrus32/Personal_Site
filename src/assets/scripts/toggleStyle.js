function changeStylePref() {
	let sessionStyle = sessionStorage.getItem("sessionStyle");
	if (sessionStyle === "light") {
		sessionStorage.setItem("sessionStyle", "dark");
	} else if (sessionStyle === "dark") {
		sessionStorage.setItem("sessionStyle", "light");
	}
}

function applyStylePref() {
	document.querySelector("#theme").setAttribute("href", "/assets/css/" + sessionStorage.getItem("sessionStyle") + ".css");
}

function toggleStyle() {
	changeStylePref();
	applyStylePref();

	document.querySelector("#style-switch").textContent = "theme: " + sessionStorage.getItem("sessionStyle");

	// change session preference in session storage
	// apply new session preference to page style
	// reflect session preference to switch text
}
