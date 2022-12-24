const NAVI = document.querySelector("nav");

window.addEventListener("scroll", function () {
        let scroll = window.pageYOffset;

        if (scroll >= 75) {
                NAVI.classList.add("header-scrolled");
        } else {
                NAVI.classList.remove("header-scrolled");
        }
});
