document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const menuPanel = document.getElementById("menu-panel");

    // Toggle the menu visibility when the menu button is clicked
    menuIcon.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click from propagating to the document
        menuPanel.classList.toggle("active"); // Toggle the active class
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!menuPanel.contains(event.target) && !menuIcon.contains(event.target)) {
            menuPanel.classList.remove("active"); // Remove the active class
        }
    });
});