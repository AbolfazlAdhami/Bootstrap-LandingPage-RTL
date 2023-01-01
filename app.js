const NAVI = document.querySelector("nav");

window.addEventListener("scroll", function () {
        let scroll = window.pageYOffset;

        if (scroll >= 75) {
                NAVI.classList.add("header-scrolled");
        } else {
                NAVI.classList.remove("header-scrolled");
        }
});

let listFooter = document.querySelectorAll("footer .footer-links li a");
const arrow = "<i class='bx bx-chevron-left'></i>";
listFooter.insertAdjacentHTML("beforebegin", arrow);
console.log(listFooter);
