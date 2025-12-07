/** ---------------------- MENU ---------------------- */

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

/** Click on menu button to toggle submenu */

menuButton.addEventListener("click", (e) => {
  e.stopPropagation();

  const isOpen = submenu.classList.contains("show");
  submenu.classList.toggle("show");

  menuButton.style.background = isOpen ? "#DFFCA1" : "#093F20";
  menuText.style.color = isOpen ? "#093F20" : "#DFFCA1";
  menuIcon.src = isOpen
    ? "./assets/icons/list.svg"
    : "./assets/icons/close.svg";
});

/** Change submenu button background and icon on hover */
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

/** ---------------------- HELPER TEXT ---------------------- */

/** Toggle helper text visibility on question icon click */
questionIcon.addEventListener("click", () => {
  helperText.classList.toggle("active");
});

/** Close helper text */
helperTextCloseIcon.addEventListener("click", () => {
  helperText.classList.remove("active");
});

/** ---------------------- SLIDER ---------------------- */

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

/** Show slide by index */
function showSlide(index) {
  if (index < 1) index = 0;
  if (index > 0) index = 1;
  currentIndex = index;

  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // Update dots based on current slide
  dots.forEach((dot, i) => {
    let activeDot = currentIndex === 0 ? 2 : 3;
    dot.style.backgroundColor = i === activeDot ? "#093F20" : "#FFF";
  });
}

arrowLeft.addEventListener("click", () => showSlide(currentIndex - 1));
arrowRight.addEventListener("click", () => showSlide(currentIndex + 1));

slider.style.transition = "transform 0.5s ease";
showSlide(currentIndex);

/** ---------------------- TAB MENU ---------------------- */
const menuItems = document.querySelectorAll(
  ".tab-menu-container-bottom-section-menu-item"
);
const detailSections = document.querySelectorAll(
  ".tab-menu-container-bottom-section-details-container"
);

// Initialize first tab active
menuItems[0].classList.add("active");
detailSections[0].style.display = "flex";

// Add .show to first tab's span
const firstSpan = detailSections[0].querySelector(
  ".tab-menu-container-bottom-section-details-container-right-section-title span"
);
if (firstSpan) firstSpan.classList.add("show");

menuItems.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    menuItems.forEach((item) => item.classList.remove("active"));

    // Hide all detail sections & remove show from spans
    detailSections.forEach((section) => {
      section.style.display = "none";
      const span = section.querySelector(
        ".tab-menu-container-bottom-section-details-container-right-section-title span"
      );
      if (span) span.classList.remove("show");
    });

    // Activate current menu item
    btn.classList.add("active");
    const currentSection = detailSections[index];
    currentSection.style.display = "flex";

    // Animate span
    const currentSpan = currentSection.querySelector(
      ".tab-menu-container-bottom-section-details-container-right-section-title span"
    );
    if (currentSpan) {
      // Reset for re-animation
      currentSpan.classList.remove("show");
      void currentSpan.offsetWidth; // force reflow
      currentSpan.classList.add("show");
    }
  });
});

/** ---------------------- POP-UP ---------------------- */
const tabMenuImages = document.querySelectorAll(
  ".tab-menu-container-bottom-section-details-container-left-section"
);
const popup = document.querySelector(".pop-up-container");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("pop-up-close-button");

/** Open popup */
tabMenuImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.stopPropagation();
    popup.style.display = "block";
    overlay.style.display = "block";
  });
});

/** Close popup */
closeButton.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.style.display = "none";
  overlay.style.display = "none";
});
/** ---------------------- SIGN UP FORM - SMILEY ANIMATION ---------------------- */
let textDirection = "top";

setInterval(() => {
  if (textDirection === "top") {
    console.log("top");
    textDirection = "down";
    document
      .getElementById("signup-dynamic-text-container")
      .classList.add("moveup");
    document
      .getElementById("signup-dynamic-text-container")
      .classList.remove("movedown");
  } else {
    console.log("down");

    textDirection = "top";
    document
      .getElementById("signup-dynamic-text-container")
      .classList.add("movedown");
    document
      .getElementById("signup-dynamic-text-container")
      .classList.remove("moveup");
  }
}, 1500);

/** ---------------------- SIGN UP FORM - FIELDS ---------------------- */

const singUpFormContainer = document.querySelector(
  ".singUp-form-container-bottom-section-user-data"
);

singUpFormContainer.addEventListener("click", function () {
  const usernameField = document.querySelector(
    ".singUp-form-container-bottom-section-user-data-information:nth-child(1) .singUp-form-container-bottom-section-user-data-text-field span"
  );
  const phoneNumberField = document.querySelector(
    ".singUp-form-container-bottom-section-user-data-information:nth-child(2) .singUp-form-container-bottom-section-user-data-text-field span"
  );
  const passwordField = document.querySelector(
    ".singUp-form-container-bottom-section-user-data-information:nth-child(3) .singUp-form-container-bottom-section-user-data-text-field span"
  );
  const passwordCondition = document.querySelectorAll(
    ".singUp-form-container-bottom-section-password-condition span"
  );
  const signUpButton = document.querySelector(
    ".singUp-form-container-bottom-section-buttons-signup"
  );
  const signUpIcon = document.querySelector(
    ".singUp-form-container-bottom-section-buttons-signup img"
  );
  const passwordHidden = document.getElementById("password-hidden");

  // Update password conditions style
  passwordCondition.forEach((item) => {
    item.style.color = "#093f20";
    const text = item.textContent.replace(/^\s*-\s*/, "");
    item.innerHTML = `<img src="./assets/icons/checkCircle.svg" style="vertical-align:middle;"/> ${text}`;
  });

  usernameField.textContent = "محمد خالدی";
  phoneNumberField.textContent = "09190415444";

  usernameField.style.color = "#093f20";
  phoneNumberField.style.color = "#093f20";
  passwordField.style.color = "#093f20";

  usernameField.style.fontFamily = "Estedad-SemiBold";
  phoneNumberField.style.fontFamily = "Estedad-SemiBold";

  signUpButton.style.opacity = "100%";
  signUpIcon.src = "./assets/icons/userPlus2.svg";
  passwordHidden.style.display = "block";
});

/** ---------------------- PASSWORD TOGGLE ---------------------- */

const passwordHidden = document.getElementById("password-hidden");
const passwordField = document.getElementById("password-placeholder");

let realPassword = "SK212148?";
let isPasswordVisible = false;
let isFirstClick = true;

/** First click hides password */
singUpFormContainer.addEventListener("click", function () {
  if (isFirstClick) {
    passwordField.textContent = "********";
    passwordField.style.color = "#093f20";
    passwordField.style.fontFamily = "Estedad-SemiBold";
    isFirstClick = false;
  }
});

/** Toggle password visibility on eye icon click */
passwordHidden.addEventListener("click", (event) => {
  event.stopPropagation();

  if (!isPasswordVisible) {
    passwordField.textContent = realPassword;
    passwordHidden.src = "./assets/icons/eye.svg";
  } else {
    passwordField.textContent = "********";
    passwordHidden.src = "./assets/icons/eyeClosed.svg";
  }
  isPasswordVisible = !isPasswordVisible;
});

/** ---------------------- CANCEL FORM ---------------------- */

const cancelFormButton = document.querySelector(
  ".singUp-form-container-bottom-section-buttons-cancel"
);
const signUpDetailsSection = document.querySelector(
  ".singUp-form-container-bottom-section-details"
);
const cancellationFormContainer = document.querySelector(
  ".singUp-form-container-bottom-section-cancellation-form"
);
const closeCancellationFormButton = document.querySelector(
  ".singUp-form-container-bottom-section-cancellation-form-buttons"
);

/** Open cancellation form */
cancelFormButton.addEventListener("click", (event) => {
  event.stopPropagation();
  singUpFormContainer.style.display = "none";
  signUpDetailsSection.style.display = "none";
  cancellationFormContainer.style.display = "flex";
  document.getElementById("sadContainer").classList.remove("fading");
  document.getElementById("sadIcon").classList.remove("move");
  document
    .getElementById("cancellationFormFirstText")
    .classList.remove("fading");
  document
    .getElementById("cancellationFormSecondText")
    .classList.remove("fading");
  document.getElementById("cancellationFormButton").classList.remove("fading");
  document.getElementById("sadContainer").classList.add("moveup");
  setTimeout(() => {
    document.getElementById("sadIcon").classList.add("move");
  }, 10);
  setTimeout(() => {
    document
      .getElementById("cancellationFormFirstText")
      .classList.add("fading");
    document
      .getElementById("cancellationFormSecondText")
      .classList.add("fading");
    document.getElementById("cancellationFormButton").classList.add("fading");
  }, 700);
});

/** Close cancellation form */
closeCancellationFormButton.addEventListener("click", (event) => {
  event.stopPropagation();
  document.getElementById("sadContainer").classList.add("fading");

  setTimeout(() => {
    singUpFormContainer.style.display = "flex";
    signUpDetailsSection.style.display = "flex";
    cancellationFormContainer.style.display = "none";
  }, 500);
});

/** ---------------------- SUCCESS FORM ---------------------- */

const signUpButton = document.querySelector(
  ".singUp-form-container-bottom-section-buttons-signup"
);
const successFormContainer = document.querySelector(
  ".singUp-form-container-bottom-section-success-form"
);
const closeSuccessFormButton = document.querySelector(
  ".singUp-form-container-bottom-section-success-form-buttons"
);

/** Go to success form */
signUpButton.addEventListener("click", (event) => {
  event.stopPropagation();
  singUpFormContainer.style.display = "none";
  signUpDetailsSection.style.display = "none";
  successFormContainer.style.display = "flex";
});

/** Close success form */
closeSuccessFormButton.addEventListener("click", (event) => {
  event.stopPropagation();
  successFormContainer.style.display = "none";
  singUpFormContainer.style.display = "flex";
  signUpDetailsSection.style.display = "flex";
});
