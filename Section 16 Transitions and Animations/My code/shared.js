let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");
let selectPlanButtons = document.querySelectorAll(".plan .button");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");
let ctaButton = document.querySelector(".main-nav__item--cta");

const openModal = () => {
	// backdrop.style.display = "block";
	// modal.style.display = "block";
	// this will actually overwrite the complete class list
	// modal.className = "open";
	modal.classList.add("open");
	backdrop.style.display = "block";
	setTimeout(() => {
		backdrop.classList.add("open");
	}, 10);
};

for (let i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener("click", openModal);
}

const closeModal = () => {
	// backdrop.style.display = "none";
	// modal.style.display = "none";
	if (modal) {
		modal.classList.remove("open");
	}
	backdrop.classList.remove("open");
	setTimeout(() => {
		backdrop.style.display = "none";
	}, 200);
};

const openNav = () => {
	mobileNav.classList.add("open");
	backdrop.style.display = "block";
	setTimeout(() => {
		backdrop.classList.add("open");
	}, 10);
};

backdrop.addEventListener("click", () => {
	mobileNav.classList.remove("open");
	closeModal();
});

if (modalNoButton) {
	modalNoButton.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", openNav);

ctaButton.addEventListener("animationstart", (event) => {
	console.log("Animation started", event);
});
ctaButton.addEventListener("animationend", (event) => {
	console.log("Animation ended", event);
});
ctaButton.addEventListener("animationiteration", (event) => {
	console.log("Animation iteration", event);
});
