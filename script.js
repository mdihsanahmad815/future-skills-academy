/*==========================================
            PRELOADER
==========================================*/

window.addEventListener("load", () => {

const preloader = document.getElementById("preloader");

preloader.style.opacity = "0";

setTimeout(() => {

preloader.style.display = "none";

},500);

});

/*==========================================
            MOBILE MENU
==========================================*/

const menuBtn = document.getElementById("menu-btn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.onclick = ()=>{

navMenu.classList.toggle("active");

}

/*==========================================
            ACTIVE MENU
==========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

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

/*==========================================
            HEADER SHADOW
==========================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(255,255,255,.98)";

header.style.boxShadow="0 15px 40px rgba(0,0,0,.08)";

}else{

header.style.background="rgba(255,255,255,.92)";

header.style.boxShadow="0 5px 20px rgba(0,0,0,.05)";

}

});

/*==========================================
          BACK TO TOP
==========================================*/

const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*==========================================
          COMING SOON POPUP
==========================================*/

const popup=document.getElementById("comingPopup");

const closePopup=document.getElementById("closePopup");

document.querySelectorAll(".coming-btn,.coming-soon").forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

popup.style.display="flex";

});

});

closePopup.onclick=()=>{

popup.style.display="none";

};

window.onclick=(e)=>{

if(e.target==popup){

popup.style.display="none";

}

};
/*==========================================
        SCROLL REVEAL ANIMATION
==========================================*/

const revealElements = document.querySelectorAll(
".feature-card,.course-card,.stat-box,.about-box,.contact-card,.founder-card,.success,.cta"
);

const reveal = () => {

const windowHeight = window.innerHeight;

revealElements.forEach(el => {

const top = el.getBoundingClientRect().top;

if(top < windowHeight - 120){

el.style.opacity = "1";
el.style.transform = "translateY(0)";

}

});

};

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(70px)";
el.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();

/*==========================================
        FLOATING HERO IMAGE
==========================================*/

const founder = document.querySelector(".founder-card");

if(founder){

setInterval(()=>{

founder.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-12px)"},

{transform:"translateY(0px)"}

],{

duration:3000,

iterations:1

});

},3000);

}

/*==========================================
          BUTTON RIPPLE
==========================================*/

document.querySelectorAll(".btn-main,.course-btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";
ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.4)";
ripple.style.transform="scale(0)";
ripple.style.animation="ripple .6s linear";
ripple.style.pointerEvents="none";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*==========================================
        RIPPLE STYLE
==========================================*/

const style=document.createElement("style");

style.innerHTML=`

.btn-main,
.course-btn{

position:relative;

overflow:hidden;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(style);

/*==========================================
        PARALLAX HERO
==========================================*/

window.addEventListener("scroll",()=>{

const value=window.scrollY;

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=value*0.3+"px";

}

});

/*==========================================
          CURSOR GLOW
==========================================*/

const glow=document.createElement("div");

glow.style.cssText=`
position:fixed;
width:25px;
height:25px;
background:#ff980055;
border-radius:50%;
pointer-events:none;
z-index:999999;
backdrop-filter:blur(2px);
transition:.05s linear;
`;

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-12+"px";

glow.style.top=e.clientY-12+"px";

});

/*==========================================
          HERO TEXT EFFECT
==========================================*/

const badge=document.querySelector(".hero-badge");

if(badge){

setInterval(()=>{

badge.classList.toggle("pulse");

},1000);

}

const pulse=document.createElement("style");

pulse.innerHTML=`

.pulse{

transform:scale(1.05);

transition:.3s;

box-shadow:0 0 20px rgba(255,152,0,.5);

}

`;

document.head.appendChild(pulse);

/*==========================================
          RANDOM BACKGROUND BUBBLES
==========================================*/

for(let i=0;i<20;i++){

const bubble=document.createElement("span");

bubble.className="bubble";

bubble.style.left=Math.random()*100+"vw";

bubble.style.animationDuration=(8+Math.random()*8)+"s";

bubble.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(bubble);

}

const bubbleStyle=document.createElement("style");

bubbleStyle.innerHTML=`

.bubble{

position:fixed;

bottom:-60px;

width:12px;

height:12px;

background:rgba(255,152,0,.15);

border-radius:50%;

pointer-events:none;

animation:floatBubble linear infinite;

z-index:-1;

}

@keyframes floatBubble{

0%{

transform:translateY(0) scale(1);

opacity:.5;

}

100%{

transform:translateY(-120vh) scale(2);

opacity:0;

}

}

`;

document.head.appendChild(bubbleStyle);
/*==========================================
        DARK MODE
==========================================*/

const themeBtn = document.getElementById("theme-btn");

themeBtn?.addEventListener("click", () => {

document.body.classList.toggle("dark");

const icon = themeBtn.querySelector("i");

if(document.body.classList.contains("dark")){

icon.className="fa-solid fa-sun";

localStorage.setItem("theme","dark");

}else{

icon.className="fa-solid fa-moon";

localStorage.setItem("theme","light");

}

});

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

themeBtn.querySelector("i").className="fa-solid fa-sun";

}

/*==========================================
      AUTO HIDE MOBILE MENU
==========================================*/

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.onclick=()=>{

navMenu.classList.remove("active");

};

});

/*==========================================
      BUTTON HOVER SOUND (OPTIONAL)
==========================================*/

document.querySelectorAll(".btn-main,.join-btn,.course-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});

/*==========================================
      HERO TYPING EFFECT
==========================================*/

const heroTitle=document.querySelector(".hero h1 span");

if(heroTitle){

const words=["Canva Design","Graphic Design","Freelancing","Digital Skills"];

let word=0;

setInterval(()=>{

heroTitle.style.opacity="0";

setTimeout(()=>{

heroTitle.innerHTML=words[word];

heroTitle.style.opacity="1";

word=(word+1)%words.length;

},300);

},2500);

}

/*==========================================
      PARTICLE CLICK EFFECT
==========================================*/

document.addEventListener("click",(e)=>{

for(let i=0;i<8;i++){

const dot=document.createElement("span");

dot.style.position="fixed";

dot.style.width="8px";

dot.style.height="8px";

dot.style.borderRadius="50%";

dot.style.background="#ff9800";

dot.style.left=e.clientX+"px";

dot.style.top=e.clientY+"px";

dot.style.pointerEvents="none";

dot.style.zIndex="999999";

document.body.appendChild(dot);

const x=(Math.random()-0.5)*160;

const y=(Math.random()-0.5)*160;

dot.animate([

{transform:"translate(0,0)",opacity:1},

{transform:`translate(${x}px,${y}px)`,opacity:0}

],{

duration:700,

easing:"ease-out"

});

setTimeout(()=>dot.remove(),700);

}

});

/*==========================================
      YEAR AUTO UPDATE
==========================================*/

const year=document.querySelector(".copyright-year");

if(year){

year.innerHTML=new Date().getFullYear();

}

console.log("Future Skills Academy Loaded Successfully 🚀");