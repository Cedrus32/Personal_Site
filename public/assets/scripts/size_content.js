let content = document.querySelector(".content");

function setSize() {
	let contentHeight;
	const buttonsHeight = document.querySelector(".buttons").offsetHeight;
	if (window.innerWidth < 1000) {
		const navHeight = document.querySelector(".global_links").offsetHeight;
		contentHeight = `calc(100dvh - calc(4 * var(--layout-gap)) - ${buttonsHeight}px - ${navHeight}px)`;
	} else {
		const footerHeight = document.querySelector("footer").offsetHeight;
		contentHeight = `calc(100dvh - calc(2 * var(--tb-margin)) - calc(2 * var(--layout-gap)) - ${buttonsHeight}px - ${footerHeight}px)`;
	}
	content.style.height = contentHeight;
}

setSize();
window.onresize = setSize;
