/** Menu */
/** Variables */
const menuButton = document.querySelector(".header-menu > .header-menu-button");
const submenu = document.querySelector(".header-menu-submenu");
const subMenuButtons = document.querySelectorAll(".header-menu-submenu-button");
const menuText = document.querySelector(".header-menu-button-title");
const menuIcon = document.getElementById("header-menu-button-icon");

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
