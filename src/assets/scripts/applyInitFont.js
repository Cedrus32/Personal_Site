function applyInitFont() {
	let font = sessionStorage.getItem("sessionFont");
	if (font == null) {
		font = "Nunito";
	}

	document.querySelector("body").style.fontFamily = font;
	sessionStorage.setItem("sessionFont", font);

	// set session font preference
	// apply preference to page
}

applyInitFont();
