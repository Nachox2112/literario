document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var animatedSection = document.getElementById("animatedSection");
        var position = animatedSection.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (position < screenHeight * 0.75) {
            animatedSection.classList.add("show");
        } else {
            animatedSection.classList.remove("show");
        }
    });
});
