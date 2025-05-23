let buttonsHeight = document.querySelector(".buttons").offsetHeight;
let footerHeight = document.querySelector("footer").offsetHeight;
let content = document.querySelector(".content");

let contentHeight = `calc(100vh - calc(2 * var(--tb-margin)) - var(--layout-gap) - ${buttonsHeight}px - ${footerHeight}px)`;
content.style.height = contentHeight;
