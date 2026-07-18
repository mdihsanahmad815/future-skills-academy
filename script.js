// =========================
// DARK MODE
// =========================

const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = function () {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML="☀️";

    }

    else{

        themeBtn.innerHTML="🌙";

    }

}