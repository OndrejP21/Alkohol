window.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#button");
    let navbarClick = document.querySelector("#nav-clicked");
    let navbar = document.querySelector("#navbar");
    let upButton = document.querySelector("#nav-clicked-button");
    
    button.addEventListener("click", () => {
        navbarClick.style.display = "block";
        navbar.style.display = "none";
    });

    upButton.addEventListener("click", () => {
        navbarClick.style.display = "none";
        navbar.style.display = "flex";
    });

    let alkoholButton = document.getElementById("nav-clicked-alkohol");
    let alkoholMenu = document.getElementById("alkohol-clicked");

    alkoholButton.addEventListener("click", () => {
        if (alkoholMenu.style.display == "none"){
            alkoholButton.classList.remove("fa-arrow-down");
            alkoholButton.classList.add("fa-arrow-up");
            alkoholMenu.style.display = "block";
            navbarClick.style.position = "relative";
            scrollTo(0,0);
        } else {
            alkoholButton.classList.remove("fa-arrow-up");
            alkoholButton.classList.add("fa-arrow-down");
            alkoholMenu.style.display = "none";
            navbarClick.style.position = "sticky";
        }
    });

}); 


