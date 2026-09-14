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


    /* =========================================
       IMAGE HOVER MOVEMENT
    ========================================= */

    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item) => {

        const image = item.querySelector("img");

        if (!image) {
            return;
        }

        item.addEventListener("mousemove", (event) => {

            const rect = item.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const moveX = (x / rect.width - 0.5) * 4;
            const moveY = (y / rect.height - 0.5) * 4;

            image.style.transform =
                `scale(1.025) translate(${moveX}px, ${moveY}px)`;

        });


        item.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1) translate(0, 0)";

        });

    });

});