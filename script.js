/*==========================================
 FUTURE SKILLS ACADEMY PREMIUM v2.0
 script.js Part 1
==========================================*/

/*========================
PRELOADER
========================*/

window.addEventListener("load", () => {

const loader = document.getElementById("preloader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},500);

});

/*========================
STICKY NAVBAR
========================*/

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*========================
MOBILE MENU
========================*/

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

menuBtn.classList.toggle("active");

});

/*========================
CLOSE MENU
========================*/

document.querySelectorAll(".nav-menu a")

.forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});

});

/*========================
ACTIVE MENU
========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*========================
BACK TO TOP
========================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*========================
DARK MODE
========================*/

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","light");

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

/*========================
SMOOTH SCROLL
========================*/

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});
/*==========================================
 FUTURE SKILLS ACADEMY PREMIUM
 script.js Part 2
==========================================*/

/*========================
COUNTER ANIMATION
========================*/

const counters = document.querySelectorAll(".counter");

const speed = 200;

const startCounter = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.dataset.target;

            const count = +counter.innerText;

            const inc = Math.ceil(target / speed);

            if (count < target) {

                counter.innerText = count + inc;

                setTimeout(update, 15);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const statSection = document.querySelector(".stats");

if (statSection) {

    const observer = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting) {

            startCounter();

            observer.disconnect();

        }

    });

    observer.observe(statSection);

}

/*========================
SCROLL REVEAL
========================*/

const revealElements = document.querySelectorAll(
".feature-card,.course-card,.stat-card,.contact-card,.founder-card,.about-container,.vision"
);

const reveal = () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            el.classList.add("fade-up");

        }

    });

};

window.addEventListener("scroll", reveal);
reveal();

/*========================
CURSOR GLOW
========================*/

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

    if (glow) {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    }

});

/*========================
COMING SOON POPUP
========================*/

const popup = document.getElementById("popup");

const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".notify-btn").forEach(btn => {

    btn.onclick = () => {

        popup.classList.add("active");

    };

});

if (closePopup) {

    closePopup.onclick = () => {

        popup.classList.remove("active");

    };

}

window.onclick = e => {

    if (e.target == popup) {

        popup.classList.remove("active");

    }

};

/*========================
BUTTON RIPPLE EFFECT
========================*/

document.querySelectorAll(".btn-main,.course-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = diameter + "px";

        circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) ripple.remove();

        this.appendChild(circle);

    });

});

/*========================
FLOATING CARDS
========================*/

document.querySelectorAll(".float").forEach(item => {

    let random = Math.random() * 2 + 3;

    item.style.animationDuration = random + "s";

});

/*========================
CONSOLE MESSAGE
========================*/

console.log(
"%cFuture Skills Academy Premium Website",
"color:#ff9800;font-size:22px;font-weight:bold;"
);

console.log(
"%cDesigned by Md Ihsan Ahmad",
"color:#2563eb;font-size:16px;"
);