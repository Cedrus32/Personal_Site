function openDialog(element) {
	const dialog = element.nextElementSibling;
	dialog.showModal();
}

function closeDialog(element) {
	const dialog = element.parentElement;
	dialog.close();
}
