/*==============================
      DARK MODE
==============================*/

const themeBtn = document.getElementById("theme-btn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    themeBtn.innerHTML = "☀️";
}

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML = "☀️";

    }else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML = "🌙";

    }

};

/*==============================
      ACTIVE NAVBAR
==============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

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

/*==============================
      SCROLL REVEAL
==============================*/

const reveals=document.querySelectorAll(

".hero,.course-card,.about-box,.contact-card"

);

window.addEventListener("scroll",()=>{

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const visible=window.innerHeight-120;

        if(top<visible){

            item.classList.add("show");

        }

    });

});

/*==============================
      SMOOTH LOAD
==============================*/

window.onload=()=>{

    document.body.classList.add("loaded");

};