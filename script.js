document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       HERO BUTTON
    ========================================= */

    const heroButton = document.querySelector(".hero-button");
    const getStarted = document.querySelector(".get-started");

    if (heroButton && getStarted) {

        heroButton.addEventListener("click", function(event) {

            event.preventDefault();

            getStarted.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const sections = document.querySelectorAll(
        ".intro, .welcome, .features, .get-started"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    sections.forEach((section) => {

        section.classList.add("reveal");

        observer.observe(section);

    });

});