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
