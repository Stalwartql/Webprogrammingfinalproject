const posts = document.querySelectorAll(".blog-post.reveal");

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


posts.forEach((post) => {

    observer.observe(post);

});



/* =========================================
   LIGHTBOX
========================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");

const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const galleryLinks = document.querySelectorAll(".lightbox-image");

let currentGallery = [];
let currentIndex = 0;



/* OPEN IMAGE */

galleryLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const galleryName = link.dataset.gallery;

        currentGallery = Array.from(
            document.querySelectorAll(
                `.lightbox-image[data-gallery="${galleryName}"]`
            )
        );

        currentIndex = currentGallery.indexOf(link);

        showImage();

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});



/* SHOW CURRENT IMAGE */

function showImage() {

    const link = currentGallery[currentIndex];

    lightboxImage.src = link.href;

    lightboxImage.alt = link.querySelector("img").alt;

    lightboxCaption.textContent = link.dataset.caption || "";

}



/* NEXT IMAGE */

lightboxNext.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= currentGallery.length) {
        currentIndex = 0;
    }

    showImage();

});



/* PREVIOUS IMAGE */

lightboxPrev.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentGallery.length - 1;
    }

    showImage();

});



/* CLOSE LIGHTBOX */

function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}

lightboxClose.addEventListener("click", closeLightbox);



/* CLOSE WHEN CLICKING BACKGROUND */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});



/* KEYBOARD CONTROLS */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("show")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowRight") {

        currentIndex++;

        if (currentIndex >= currentGallery.length) {
            currentIndex = 0;
        }

        showImage();

    }

    if (event.key === "ArrowLeft") {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = currentGallery.length - 1;
        }

        showImage();

    }

});