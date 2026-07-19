/*==============================
        PRELOADER
==============================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }

});

/*==============================
        DARK MODE
==============================*/

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";

    }

});

/*==============================
        ACTIVE MENU
==============================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==============================
        MOBILE MENU
==============================*/

const menuBtn = document.getElementById("menu-btn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show-menu");

});

/*==============================
        SCROLL REVEAL
==============================*/

const reveal = () => {

    const elements = document.querySelectorAll(

        ".hero,.course-card,.about-box,.contact-card"

    );

    elements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

/*==============================
        SMOOTH BUTTON EFFECT
==============================*/

document.querySelectorAll("a").forEach(btn => {

    btn.addEventListener("click", function () {

        this.style.transform = "scale(.95)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});

/*==============================
        STICKY NAVBAR
==============================*/

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 60) {

        navbar.style.padding = "12px 8%";

    } else {

        navbar.style.padding = "18px 8%";

    }

});

/*==============================
        COURSE HOVER SOUND READY
==============================*/
// Future Update

/*==============================
        FIREBASE READY
==============================*/
// Future Login System

/*==============================
        STUDENT DASHBOARD READY
==============================*/
// Coming Soon