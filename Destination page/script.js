/* =========================================
   DESTINATION PAGE JAVASCRIPT
========================================= */


/* =========================================
   1. SCROLL REVEAL ANIMATION
========================================= */

const destinationCards =
    document.querySelectorAll(".destination-card");


destinationCards.forEach((card) => {

    card.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


destinationCards.forEach((card) => {

    revealObserver.observe(card);

});