// ===============================
// Future Skills Academy
// script.js
// ===============================

// Smooth scroll for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        const target = this.getAttribute('href');

        if(target.startsWith("#")){

            e.preventDefault();

            document.querySelector(target).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 30){

        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }

    else{

        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";

    }

});

// ===============================
// Course Card Animation
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},{

    threshold:0.2

});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition="0.6s";

    observer.observe(card);

});

// ===============================
// Hero Button Animation
// ===============================

const btn = document.querySelector(".btn");

setInterval(()=>{

    btn.style.transform="scale(1.05)";

    setTimeout(()=>{

        btn.style.transform="scale(1)";

    },500);

},3000);

// ===============================
// Current Year
// ===============================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p:last-child");

if(footer){

    footer.innerHTML =
    "© " + year + " Future Skills Academy. All Rights Reserved.";

}

console.log("Future Skills Academy Website Loaded Successfully.");