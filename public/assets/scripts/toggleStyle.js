function changePref() {
	let sessionStyle = sessionStorage.getItem("sessionStyle");
	if (sessionStyle === "light") {
		sessionStorage.setItem("sessionStyle", "dark");
	} else if (sessionStyle === "dark") {
		sessionStorage.setItem("sessionStyle", "light");
	}
}

function applyPref() {
	document.querySelector("#theme").setAttribute("href", "/assets/css/" + sessionStorage.getItem("sessionStyle") + ".css");
}

function toggleStyle() {
	changePref();
	applyPref();

	document.querySelector("#style-switch").textContent = "theme: " + sessionStorage.getItem("sessionStyle");

	// change session preference in session storage
	// apply new session preference to page style
	// reflect session preference to switch text
}
