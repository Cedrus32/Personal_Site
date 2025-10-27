function setPref() {
	if (sessionStorage.getItem("sessionStyle") == null) {
		alignPrefs(window.matchMedia("(prefers-color-scheme: dark").matches);
	}

	// check for session preference
	// if none (first page load of session)...
	// ...align session/system prefs
}

function applyPref() {
	let sysPrefersDark = window.matchMedia("(prefers-color-scheme: dark").matches;
	if (sessionStorage.getItem("sysPrefersDark") !== sysPrefersDark.toString()) {
		alignPrefs(sysPrefersDark);
	}
	document.querySelector("#theme").setAttribute("href", "/assets/css/" + sessionStorage.getItem("sessionStyle") + ".css");

	// check if stored system preference matches current system preference
	// if not (preference changed during browsing session)...
	// ...align session/system prefs
	// set path of css file to match session preference
}

function alignPrefs(sysPrefersDark) {
	let sessionStyle;
	if (sysPrefersDark) {
		sessionStyle = "dark";
	} else {
		sessionStyle = "light";
	}
	sessionStorage.setItem("sessionStyle", sessionStyle);
	sessionStorage.setItem("sysPrefersDark", sysPrefersDark);

	// get system preference
	// match session/system style preference
	// set both vars in session storage
}

function applyInitStyle() {
	setPref();
	applyPref();

	// get session/system style preference
	//apply preference to page
}

applyInitStyle(); // runs on each page load
