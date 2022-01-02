window.addEventListener("DOMContentLoaded", () => {
    let blocks = document.querySelector("#blocks");
    let dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("mouseover", () => {
    
        blocks.style.zIndex = "-1";
    });

    dropdown.addEventListener("mouseleave", () => {

        blocks.style.zIndex = "0";
    });

});

