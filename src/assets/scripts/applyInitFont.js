function applyInitFont() {
	let font = localStorage.getItem("font");
	if (font == null) {
		font = "Nunito";
	}

	document.querySelector("body").style.fontFamily = font;
	localStorage.setItem("font", font);
}

applyInitFont();
