
document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation menu
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("active");
        });
    }

    // Back to top button
    const backToTop = document.querySelector("#backToTop");

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Contact form validation
    document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation menu
    // Keep your existing menu code here.

    // Back to top button
    // Keep your existing back-to-top code here.

    // Contact form validation
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const response = document.querySelector("#contactResponse");

            response.textContent =
                "Thank you for contacting Gift of the Givers! Your message has been received.";

            contactForm.reset();
        });
    }

    // Enquiry form validation
    // Keep your existing enquiry form code here.

});

    // Enquiry form validation
    const enquiryForm = document.querySelector("#enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!enquiryForm.checkValidity()) {
                enquiryForm.reportValidity();
                return;
            }

            const response = document.querySelector("#enquiryResponse");

            response.textContent =
                "Thank you! Your enquiry has been completed successfully.";

            enquiryForm.reset();
        });
    }

// Accordion functionality
const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const content = button.nextElementSibling;
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", !isExpanded);
        content.hidden = isExpanded;
    });
});

// Image gallery lightbox
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const closeLightbox = document.querySelector("#closeLightbox");

galleryImages.forEach(function(image) {
    image.addEventListener("click", function() {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.hidden = false;
    });
});

if (closeLightbox) {
    closeLightbox.addEventListener("click", function() {
        lightbox.hidden = true;
        lightboxImage.src = "";
    });
}
// Gallery Lightbox
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

if (lightbox && lightboxImage && closeLightbox) {

    galleryImages.forEach(function(image) {

        image.style.cursor = "pointer";

        image.addEventListener("click", function() {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.hidden = false;
        });

    });

    closeLightbox.addEventListener("click", function() {
        lightbox.hidden = true;
        lightboxImage.src = "";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.hidden = true;
            lightboxImage.src = "";
        }
    });

}