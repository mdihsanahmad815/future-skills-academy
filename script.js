/*=====================================================
Future Skills Academy Premium v3.0
script.js Part 1
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
    PRELOADER
    ==============================*/

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    });

    /*==============================
    HEADER SCROLL
    ==============================*/

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /*==============================
    CURSOR GLOW
    ==============================*/

    const glow = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

    /*==============================
    BACK TO TOP
    ==============================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});