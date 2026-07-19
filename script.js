/* =====================================
   Future Skills Academy Premium JS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Loader ---------- */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 800);

    });

    /* ---------- Theme ---------- */

    const themeBtn = document.getElementById("themeBtn");

    const html = document.documentElement;

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme){

        html.setAttribute("data-theme", savedTheme);

    }

    themeBtn.addEventListener("click",()=>{

        let current = html.getAttribute("data-theme");

        if(current==="dark"){

            html.setAttribute("data-theme","light");

            localStorage.setItem("theme","light");

        }else{

            html.setAttribute("data-theme","dark");

            localStorage.setItem("theme","dark");

        }

    });

    /* ---------- Search ---------- */

    const search = document.getElementById("searchCourse");

    if(search){

        search.addEventListener("keyup",()=>{

            let value = search.value.toLowerCase();

            document.querySelectorAll(".course-card").forEach(card=>{

                let txt = card.innerText.toLowerCase();

                card.style.display = txt.includes(value) ? "block" : "none";

            });

        });

    }

    /* ---------- Coming Soon ---------- */

    const modal = document.getElementById("comingModal");

    const close = document.getElementById("closeComing");

    document.querySelectorAll(".coming-btn").forEach(btn=>{

        btn.onclick=()=>{

            modal.style.display="flex";

        }

    });

    if(close){

        close.onclick=()=>{

            modal.style.display="none";

        }

    }

    window.onclick=(e)=>{

        if(e.target===modal){

            modal.style.display="none";

        }

    }

});