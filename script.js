/*==================================
        PRELOADER
==================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        },500);

    }

});


/*==================================
        DARK MODE
==================================*/

const themeBtn = document.getElementById("theme-btn");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    if(themeBtn){

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

}

themeBtn?.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});


/*==================================
        MOBILE MENU
==================================*/

const menuBtn=document.getElementById("menu-btn");

const navMenu=document.querySelector(".nav-menu");

menuBtn?.addEventListener("click",()=>{

    navMenu.classList.toggle("show-menu");

});


/*==================================
        ACTIVE MENU
==================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(scrollY>=sectionTop){

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


/*==================================
        SCROLL ANIMATION
==================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hero,.stat-box,.feature-card,.course-card,.about-box,.contact-card,.success").forEach(el=>{

observer.observe(el);

});


/*==================================
        BACK TO TOP
==================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn?.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*==================================
        COMING SOON POPUP
==================================*/

const popup=document.getElementById("comingPopup");

const closePopup=document.getElementById("closePopup");

document.querySelectorAll(".coming-btn,.coming-soon").forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

popup.style.display="flex";

});

});

closePopup?.addEventListener("click",()=>{

popup.style.display="none";

});

window.addEventListener("click",(e)=>{

if(e.target===popup){

popup.style.display="none";

}

});


/*==================================
        SMOOTH SCROLL
==================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*==================================
        STUDENT LOGIN
==================================*/

document.querySelectorAll(".login-btn").forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

alert(

`🚀 Student Dashboard Coming Soon!

Very soon you will get:

✅ Google Login

✅ Student Dashboard

✅ Student ID Card

✅ PDF ID Card

✅ Purchased Courses

✅ Certificates

✅ Assignments

Future Skills Academy`

);

});

});


/*==================================
        COURSE ENROLL
==================================*/

document.querySelectorAll(".course-btn").forEach(btn=>{

if(!btn.classList.contains("coming-btn")){

btn.addEventListener("click",()=>{

console.log("Course Enroll");

});

}

});


/*==================================
        CONSOLE
==================================*/

console.log("%cFuture Skills Academy","font-size:28px;color:#2563eb;font-weight:bold;");

console.log("Developed by Md Ihsan Ahmad");