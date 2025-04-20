document.addEventListener("DOMContentLoaded", function() {
    // Function to adjust layout based on screen size
    function adjustLayout() {
        const width = window.innerWidth;

        const header = document.querySelector(".header");
        const nav = document.querySelector(".nav ul");
        const hero = document.querySelector(".hero");
        const roomContainer = document.querySelector(".room-container");

        if (width <= 768) {
            header.style.flexDirection = "column";
            nav.style.flexDirection = "column";
            nav.style.gap = "10px";
            hero.style.height = "auto";
            hero.style.padding = "20px";
            roomContainer.style.flexDirection = "column";
            roomContainer.style.gap = "15px";
        } else {
            header.style.flexDirection = "row";
            nav.style.flexDirection = "row";
            nav.style.gap = "15px";
            hero.style.height = "100vh";
            hero.style.padding = "0";
            roomContainer.style.flexDirection = "row";
            roomContainer.style.gap = "20px";
        }
    }

    // Call the function on page load and resize
    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});