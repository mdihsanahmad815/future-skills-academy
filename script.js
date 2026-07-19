/*=========================================
Future Skills Academy
script.js
=========================================*/

// Loader
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);

});


/*=========================================
Theme Toggle
=========================================*/

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

themeBtn.onclick=()=>{

const html=document.documentElement;

const theme=html.getAttribute("data-theme");

if(theme==="dark"){

html.setAttribute("data-theme","light");

themeBtn.innerHTML='<i class="ri-moon-line"></i>';

localStorage.setItem("theme","light");

}else{

html.setAttribute("data-theme","dark");

themeBtn.innerHTML='<i class="ri-sun-line"></i>';

localStorage.setItem("theme","dark");

}

}

}

const savedTheme=localStorage.getItem("theme");

if(savedTheme){

document.documentElement.setAttribute("data-theme",savedTheme);

if(themeBtn){

themeBtn.innerHTML=savedTheme==="dark"

?'<i class="ri-sun-line"></i>'

:'<i class="ri-moon-line"></i>';

}

}


/*=========================================
Course Search
=========================================*/

const search=document.getElementById("searchCourse");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const cards=document.querySelectorAll(".course-card");

cards.forEach(card=>{

const title=card.innerText.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}


/*=========================================
Coming Soon Modal
=========================================*/

const modal=document.getElementById("comingModal");

const closeBtn=document.getElementById("closeComing");

const buttons=document.querySelectorAll(".coming-btn");

buttons.forEach(btn=>{

btn.onclick=()=>{

if(btn.innerText!=="Enroll Now"){

modal.style.display="flex";

}

}

});

if(closeBtn){

closeBtn.onclick=()=>{

modal.style.display="none";

}

}

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

}


/*=========================================
Navbar Shadow
=========================================*/

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>80){

nav.style.background="rgba(10,20,35,.95)";

}else{

nav.style.background="rgba(255,255,255,.08)";

}

});


/*=========================================
Smooth Scroll
=========================================*/

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


/*=========================================
Animation on Scroll
=========================================*/

const cards=document.querySelectorAll(".course-card,.stat-box,.contact-card,.faq-item");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".6s";

observer.observe(card);

});
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};