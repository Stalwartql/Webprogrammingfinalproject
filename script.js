const heroButton = document.querySelector(".hero-button");
const getStarted = document.querySelector(".get-started");

heroButton.addEventListener("click", function(event) {

    event.preventDefault();

    getStarted.scrollIntoView({
        behavior: "smooth"
    });

});