const navToggle = document.querySelector(".nav-menu_toggle"),
      navMenu = document.querySelector(".nav_menu"),
      navClose = document.querySelector(".nav-menu_close");


if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}