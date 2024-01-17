document.addEventListener("DOMContentLoaded", function() {
    var parallaxImages = document.querySelectorAll('img');

    window.addEventListener("scroll", function() {
        parallaxImages.forEach(function(image) {
            var imageRect = image.getBoundingClientRect();
            var imageCenterY = imageRect.top + imageRect.height / 2;
            var scrollPosition = window.scrollY + window.innerHeight / 2; // Adjusted for the center of the viewport
            var translateY = (imageCenterY - scrollPosition) * 0.5; // Adjust the factor for the desired parallax effect
            image.style.transform = 'translateY(' + translateY + 'px)';
        });
    });
});