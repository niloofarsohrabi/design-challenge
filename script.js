/** Menu */
/** Variables */
const menuButton = document.querySelector(".header-menu > .header-menu-button");
const submenu = document.querySelector(".header-menu-submenu");
const subMenuButtons = document.querySelectorAll(".header-menu-submenu-button");
const menuText = document.querySelector(".header-menu-button-title");
const menuIcon = document.getElementById("header-menu-button-icon");
const questionIcon = document.querySelector(
  ".range-slider-container-bottom-section-helper-section-question-image"
);
const helperText = document.querySelector(
  ".range-slider-container-bottom-section-helper-text"
);
const helperTextCloseIcon = document.querySelector(
  ".range-slider-container-bottom-section-helper-text-top-section-close-image"
);

/** Click on menu button and sub menu open */
menuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = submenu.style.display === "block";
  submenu.style.display = isOpen ? "none" : "block";
  menuButton.style.background = isOpen ? "#DFFCA1" : "#093F20";
  menuText.style.color = isOpen ? "#093F20" : "#DFFCA1";
  menuIcon.src = isOpen
    ? "./assets/icons/list.svg"
    : "./assets/icons/close.svg";
});

/** Sub menu change background*/
subMenuButtons.forEach((btn) => {
  const icon = btn.querySelector("img");
  const text = btn.querySelector(".header-menu-submenu-button-title");

  btn.addEventListener("mouseenter", () => {
    btn.style.background = "#093F20";
    text.style.color = "#DFFCA1";
    icon.src = "./assets/icons/fillCircle.svg";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "#DFFCA1";
    text.style.color = "";
    icon.src = "./assets/icons/emptyCircel.svg";
  });
});

/** Helper Text */
questionIcon.addEventListener("click", () => {
  helperText.classList.toggle("active");
});
helperTextCloseIcon.addEventListener("click", () => {
  helperText.classList.remove("active");
});

/** Slider */
const slider = document.querySelector(
  ".slider-container-bottom-section-slider-image-container"
);
const dots = document.querySelectorAll(
  ".slider-container-bottom-section-buttons-dot-container-single-dot"
);
const arrowLeft = document.querySelector(
  ".slider-container-bottom-section-buttons-arrow-left"
);
const arrowRight = document.querySelector(
  ".slider-container-bottom-section-buttons-arrow-right"
);

let currentIndex = 0;
const slideWidth = 549;

function showSlide(index) {
  if (index > 1) index = 0;
  if (index < 0) index = 1;
  currentIndex = index;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  dots.forEach((dot, i) => {
    dot.style.backgroundColor =
      (currentIndex === 0 && i === 3) || (currentIndex === 1 && i === 2)
        ? "#093F20"
        : "#FFF";
  });
}

arrowLeft.addEventListener("click", () => showSlide(currentIndex - 1));
arrowRight.addEventListener("click", () => showSlide(currentIndex + 1));

slider.style.transition = "transform 0.5s ease";

showSlide(currentIndex);

/** Tab Menu */
const menuItems = document.querySelectorAll(
  ".tab-menu-container-bottom-section-menu-item"
);

const detailSections = document.querySelectorAll(
  ".tab-menu-container-bottom-section-details-container"
);

menuItems[0].classList.add("active");
detailSections[0].style.display = "flex";

menuItems.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    menuItems.forEach((item) => item.classList.remove("active"));
    detailSections.forEach((section) => (section.style.display = "none"));

    btn.classList.add("active");
    detailSections[index].style.display = "flex";
  });
});

/** Pop up */
const tabMenuImage = document.querySelector(
  ".tab-menu-container-bottom-section-details-container-left-section"
);
const popup = document.querySelector(".pop-up-container");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("pop-up-close-button");

tabMenuImage.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.style.display = "block";
  overlay.style.display = "block";
});
closeButton.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.style.display = "none";
  overlay.style.display = "none";
});
