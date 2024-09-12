document.addEventListener('DOMContentLoaded', function () {
    const prevButtons = document.querySelectorAll('.prev');
    const nextButtons = document.querySelectorAll('.next');

    prevButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            navigateTo(targetId);
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            navigateTo(targetId);
        });
    });
});

function navigateTo(galleryId) {
    // Close the current popup
    const currentPopup = document.querySelector('.pop-overlay.animate');
    if (currentPopup) {
        currentPopup.classList.remove('animate');
    }

    // Open the new popup
    const newPopup = document.getElementById(galleryId);
    if (newPopup) {
        newPopup.classList.add('animate');
    }
}

// Throttle function for scroll events
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Handle scroll event with throttling
window.addEventListener('scroll', throttle(function () {
    const nav = document.querySelector('nav');

    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}, 200)); // Throttle scroll event every 200ms

// Handle tab switch logic
document.querySelectorAll('.tab-label').forEach(label => {
    label.addEventListener('click', () => {
        const sections = document.querySelectorAll('.tab-content .tab-section');
        sections.forEach(section => section.style.display = 'none');

        const targetInput = document.querySelector(`#${label.getAttribute('for')}`);
        targetInput.checked = true;
        targetInput.nextElementSibling.style.display = 'block';
    });
});

$(document).ready(function () {
    // Initialize FancyBox for the gallery images with the new identifier
    $('[data-fancybox="gallery-images"]').fancybox({
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        loop: true
    });

    // Prevent FancyBox from triggering when clicking on the menu link
    $('a[href="#gallery"]').on("click", function (e) {
        e.preventDefault();  // Prevent default anchor behavior (scroll)
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 1000);  // Scroll smoothly to the gallery section
    });
});

function hideURLbar() {
    window.scrollTo(0, 1);
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(hideURLbar, 0);
});
