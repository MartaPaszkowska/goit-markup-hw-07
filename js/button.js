document.querySelectorAll(".item-menu").forEach((button) => {
	button.addEventListener("click", () => {
		const link = button.getAttribute("data-link");
		window.location.href = link;
	});
});
