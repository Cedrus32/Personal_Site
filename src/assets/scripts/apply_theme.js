let stylesheet = document.getElementById("theme");
let bgImage = document.querySelector(".bg-image");

function setTheme(targetTheme) {
	stylesheet.href = `/assets/css/${targetTheme}.css`;
	bgImage.src = `/assets/images/layouts/v1/${targetTheme}.gif`;
	if (targetTheme !== localStorage.getItem("theme")) {
		localStorage.setItem("theme", targetTheme);
	}
}

function switchTheme(e) {
	if (e.target.dataset.theme) {
		setTheme(e.target.dataset.theme);
	}
}

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
	setTheme(currentTheme);
} else {
	setTheme("light");
}

const themeMenu = document.getElementById("theme-menu");
themeMenu.addEventListener("click", switchTheme);
