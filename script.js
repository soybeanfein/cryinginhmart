document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach(container => {
        const img = container.querySelector("img");
        const tooltip = container.querySelector(".tooltip");

        img.addEventListener("click", function (event) {
            // Hide all tooltips before showing the clicked one
            document.querySelectorAll(".tooltip").forEach(tip => tip.style.display = "none");

            // Position tooltip near the click
            tooltip.style.display = "block";
            tooltip.style.left = `${event.offsetX}px`;
            tooltip.style.top = `${event.offsetY + img.height / 2}px`;
        });

        // Hide tooltip when clicking outside
        document.addEventListener("click", function (event) {
            if (!container.contains(event.target)) {
                tooltip.style.display = "none";
            }
        });
    });
});