const hamburger = document.getElementsByClassName("hamburger")[0];
const navMenu = document.getElementsByClassName("nav-menu")[0];


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


function show() {
    var showElements = document.querySelectorAll(".show");
    console.log(showElements);
    for (var i = 0; i < showElements.length; i++) {
        var windowHeight = window.innerHeight;
        var elementPos = showElements[i].getBoundingClientRect().top;
        var elementVisible = 200;

        if (elementPos < windowHeight - elementVisible)
            showElements[i].classList.add("active");
        else
            showElements[i].classList.remove("active");
    }

}


window.addEventListener("scroll", show);
