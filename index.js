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

// JavaScript to handle scroll event
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');

    if (window.scrollY > 50) { // Change '50' to the scroll distance you want
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.querySelectorAll('.tab-label').forEach(label => {
    label.addEventListener('click', () => {
        document.querySelectorAll('.tab-content .tab-section').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector(`#${label.getAttribute('for')}`).checked = true;
        document.querySelector(`#${label.getAttribute('for')}`).nextElementSibling.style.display = 'block';
    });
});
