function toggleFont(font) {
	document.querySelector("body").style.fontFamily = font.value;
	localStorage.setItem("font", font.value);
}
