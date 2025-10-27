function toggleFont(font) {
	document.querySelector("body").style.fontFamily = font.value;
	sessionStorage.setItem("sessionFont", font.value);

	// get selected front from dropdown
	// set font preference in session storage
}
