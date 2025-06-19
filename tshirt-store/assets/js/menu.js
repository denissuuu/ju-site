document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const menuPanel = document.getElementById("menu-panel");
    const closeMenu = document.getElementById("close-menu");

    // Toggle the menu visibility when the menu button is clicked
    menuIcon.addEventListener("click", () => {
        menuPanel.classList.toggle("active"); // Toggle the active class
    });

    // Close the menu when the close button is clicked
    closeMenu.addEventListener("click", () => {
        menuPanel.classList.remove("active");
    });
});