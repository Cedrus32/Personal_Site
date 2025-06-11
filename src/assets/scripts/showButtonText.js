function showButtonText() {
	let styleButton = document.querySelector("#switch");
	const style = localStorage.getItem("style");
	styleButton.textContent = "theme: " + style;
}

showButtonText();
