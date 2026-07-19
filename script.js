/*=====================================
        DARK MODE
=====================================*/

const themeBtn = document.getElementById("theme-btn");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML = "☀️";

}

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML = "☀️";

        localStorage.setItem("theme","dark");

    }else{

        themeBtn.innerHTML = "🌙";

        localStorage.setItem("theme","light");

    }

};

/*=====================================
      NAVBAR SHADOW
=====================================*/

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 30){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});

/*=====================================
      ACTIVE MENU
=====================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});

/*=====================================
      SCROLL REVEAL
=====================================*/

const reveals=document.querySelectorAll(

".hero,.course-card,.about-box,.contact-card,footer"

);

function reveal(){

    const windowHeight=window.innerHeight;

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<windowHeight-100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/*=====================================
      PAGE LOADED
=====================================*/

window.onload=()=>{

    document.body.style.opacity="1";

};

/*=====================================
      SMOOTH BUTTON
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

console.log("Future Skills Academy Loaded Successfully");