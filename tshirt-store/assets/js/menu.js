document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const menuPanel = document.getElementById("menu-panel");

    // Toggle the menu visibility when the menu button is clicked
    menuIcon.addEventListener("click", () => {
        menuPanel.classList.toggle("active"); // Toggle the active class
    });
});