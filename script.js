/*=========================================
        PAGE LOADER
=========================================*/

window.addEventListener("load", () => {

document.body.classList.add("loaded");

const preloader = document.getElementById("preloader");

if(preloader){

preloader.style.opacity="0";

setTimeout(()=>{

preloader.style.display="none";

},500);

}

});

/*=========================================
        DARK MODE
=========================================*/

const themeBtn=document.getElementById("theme-btn");

if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

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

/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn=document.getElementById("menu-btn");

const navMenu=document.querySelector(".nav-menu");

menuBtn.onclick=()=>{

navMenu.classList.toggle("active");

};

/*=========================================
        STICKY NAVBAR
=========================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>80);

});

/*=========================================
        ACTIVE MENU
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=window.scrollY;

const offset=section.offsetTop-120;

const height=section.offsetHeight;

if(top>=offset && top<offset+height){

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

/*=========================================
        SCROLL REVEAL
=========================================*/

const reveals=document.querySelectorAll(

".stat-box,.feature-card,.course-card,.about-box,.contact-card,.cta,.founder-card"

);

function reveal(){

reveals.forEach(box=>{

const top=box.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

box.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*=========================================
        COUNTER
=========================================*/

const counters=document.querySelectorAll(".stat-box h2");

let started=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

const top=stats.offsetTop-400;

if(window.scrollY>top && !started){

counters.forEach(counter=>{

let target=parseInt(counter.innerText);

let count=0;

let speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

started=true;

}

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

/*=========================================
        HERO FLOAT
=========================================*/

const founder=document.querySelector(".founder-card");

if(founder){

window.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/40;

let y=(window.innerHeight/2-e.pageY)/40;

founder.style.transform=

`rotateY(${x}deg) rotateX(${y}deg)`;

});

}

/*=========================================
        END
=========================================*/