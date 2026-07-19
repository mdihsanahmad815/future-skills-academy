/*==============================
      PRELOADER
==============================*/

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
    }, 600);
});

/*==============================
      STICKY HEADER
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/*==============================
      MOBILE MENU
==============================*/

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector(".nav-menu");

if(menuBtn){

menuBtn.onclick = () =>{

navMenu.classList.toggle("active");

};

}

/*==============================
      DARK MODE
==============================*/

const themeBtn = document.getElementById("theme-btn");

if(themeBtn){

themeBtn.onclick = ()=>{

document.body.classList.toggle("dark");

let icon = themeBtn.querySelector("i");

if(document.body.classList.contains("dark")){

icon.className="fa-solid fa-sun";

}else{

icon.className="fa-solid fa-moon";

}

}

}

/*==============================
      BACK TO TOP
==============================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}

/*==============================
      COMING SOON POPUP
==============================*/

const popup=document.getElementById("comingPopup");

const closePopup=document.getElementById("closePopup");

document.querySelectorAll(".coming-btn,.coming-soon").forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

if(popup){

popup.classList.add("show");

}

});

});

if(closePopup){

closePopup.onclick=()=>{

popup.classList.remove("show");

}

}

window.onclick=(e)=>{

if(e.target===popup){

popup.classList.remove("show");

}

}

/*==============================
      SCROLL ANIMATION
==============================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(".feature-card,.course-card,.stat-box,.contact-card,.founder-card,.about-box").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/*==============================
      MOUSE GLOW
==============================*/

const glow=document.createElement("div");

glow.className="cursorGlow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/*==============================
      BUTTON RIPPLE
==============================*/

document.querySelectorAll(".btn-main,.course-btn").forEach(btn=>{

btn.addEventListener("click",function(e){

let ripple=document.createElement("span");

ripple.className="ripple";

this.appendChild(ripple);

let x=e.offsetX;

let y=e.offsetY;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*==============================
      FLOATING ICONS
==============================*/

document.querySelectorAll(".feature-card i,.course-icon").forEach(icon=>{

setInterval(()=>{

icon.animate([

{transform:"translateY(0)"},

{transform:"translateY(-6px)"},

{transform:"translateY(0)"}

],{

duration:1800

});

},2500);

});
