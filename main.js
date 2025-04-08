document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".navbar_bars");
    const menu = document.querySelector(".navbar_menu");
    const logo = document.querySelector(".navbar_logo");
    const link = document.querySelector(".navbar_links");

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
        logo.classList.toggle("hide");
        link.classList.toggle("hide");
    });
});