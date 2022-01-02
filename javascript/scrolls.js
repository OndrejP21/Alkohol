window.addEventListener("DOMContentLoaded", () => {
    let url = window.location.href;
    
    if (url.includes("/alkohol/#pivo")){
        ScrollPivo();
    } else if (url.includes("/alkohol/#vino")){
        ScrollVino();
    } else if (url.includes("/alkohol/#lihoviny")){
        ScrollLihoviny();
    } else if (url.includes("/alkohol/#konak")){
        ScrollKonak();
    } else if (url.includes("/alkohol/#medovina")){
        ScrollMedovina();
    } else if (url.includes("/alkohol/#burcak")){
        ScrollBurcak();
    } else if (url.includes("/alkohol/#liker")){
        ScrollLiker();
    }
});

function Scroll(x){
    let navbar = document.querySelector("#navbar").offsetHeight;

    window.scrollTo(1, (x - navbar));
}

function ScrollTequila(){
    let x = document.querySelector("#tequila").offsetTop;

    Scroll(x);
}

function ScrollWhiskey(){
    let x = document.querySelector("#whiskey").offsetTop;

    Scroll(x);
}

function ScrollPivo(){
    let x = document.querySelector("#pivo").offsetTop;

    Scroll(x);

}

function ScrollVino(){
    let x = document.querySelector("#vino").offsetTop;

    Scroll(x);

}

function ScrollLihoviny(){
    let x = document.querySelector("#lihoviny").offsetTop;

    Scroll(x);

}

function ScrollKonak(){
    let x = document.querySelector("#konak").offsetTop;

    Scroll(x);

}

function ScrollMedovina(){
    let x = document.querySelector("#medovina").offsetTop;

    Scroll(x);

}

function ScrollBurcak(){
    let x = document.querySelector("#burcak").offsetTop;

    Scroll(x);

}

function ScrollLiker(){
    let x = document.querySelector("#liker").offsetTop;

    Scroll(x);

}

function ScrollUp(){
    scrollTo(0, 0);
}