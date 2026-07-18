document.querySelector(".btn").addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(".course").scrollIntoView({
        behavior: "smooth"
    });
});