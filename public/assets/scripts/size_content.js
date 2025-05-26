// add event listener for button or footer height change
// add event listener for body width cross 100px threshold

let content = document.querySelector(".content");
let buttonsHeight = document.querySelector(".buttons").offsetHeight;

let contentHeight;
if (window.innerWidth < 1000) {
	let navHeight = document.querySelector(".global_links").offsetHeight;
	contentHeight = `calc(100dvh - calc(4 * var(--layout-gap)) - ${buttonsHeight}px - ${navHeight}px)`;
} else {
	let footerHeight = document.querySelector("footer").offsetHeight;
	contentHeight = `calc(100dvh - calc(2 * var(--tb-margin)) - calc(2 * var(--layout-gap)) - ${buttonsHeight}px - ${footerHeight}px)`;
}

content.style.height = contentHeight;
