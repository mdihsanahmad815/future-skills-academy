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
// ===============================
// Future Skills Academy
// script.js
// ===============================

// Smooth Scroll

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        if (this.getAttribute('href').startsWith('#')) {

            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});

// Navbar Shadow

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

    } else {

        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";

    }

});

// Course Card Animation

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});
/*================ BACK TO TOP ================*/

let topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*================ COUNTER ================*/

const counters=document.querySelectorAll(".count");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const increment=target/100;

if(c<target){

counter.innerText=`${Math.ceil(c+increment)}`;

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

};

update();

});