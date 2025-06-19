function openDialog(element) {
	console.log(element.nextElementSibling);
	const dialog = element.nextElementSibling;
	dialog.showModal();
}

function closeDialog(element) {
	console.log(element.parentElement);
	const dialog = element.parentElement;
	dialog.close();
}
