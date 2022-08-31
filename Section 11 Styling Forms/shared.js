let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");
let selectPlanButtons = document.querySelectorAll(".plan .button");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

const openModal = () => {
	// backdrop.style.display = "block";
	// modal.style.display = "block";
	// this will actually overwrite the complete class list
	// modal.className = "open";
	backdrop.classList.add("open");
	modal.classList.add("open");
};

for (let i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener("click", openModal);
}

const closeModal = () => {
	// backdrop.style.display = "none";
	// modal.style.display = "none";
	backdrop.classList.remove("open");

	if (modal) {
		modal.classList.remove("open");
	}
};

const openNav = () => {
	backdrop.classList.add("open");
	mobileNav.classList.add("open");
};

backdrop.addEventListener("click", () => {
	mobileNav.classList.remove("open");
	closeModal();
});

if (modalNoButton) {
	modalNoButton.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", openNav);
