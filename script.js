 //SLIDESHOW SCRIPT edited from w3school
 let slideIndex = [1, 1, 1, 1];
 let slideId = ["Cliffside_slides", "Sakura_slides", "RADIO_slides", "hexe_slides"];
 showSlides(1, 0);
 showSlides(1, 1);
 showSlides(1, 2);
 showSlides(1, 3);

 function plusSlides(n, no) {
     showSlides(slideIndex[no] += n, no);
 }

 function showSlides(n, no) {
     let i;
     let x = document.getElementsByClassName(slideId[no]);
     if (n > x.length) {
         slideIndex[no] = 1;
     }
     if (n < 1) {
         slideIndex[no] = x.length;
     }
     for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
     }
     x[slideIndex[no] - 1].style.display = "block";
 }
 //lazy load script

 document.addEventListener("DOMContentLoaded", function() {
     var observerOptions = {
         root: null,
         rootMargin: '0px',
         threshold: 0.6 // treshold for loading images
     };

     var observer = new IntersectionObserver(handleIntersect, observerOptions);
     var lazyImages = document.querySelectorAll(".lazy-image");

     lazyImages.forEach(function(lazyImage) {
         observer.observe(lazyImage);
     });
 });

 function handleIntersect(entries, observer) {
     entries.forEach(function(entry) {
         if (entry.isIntersecting) {
             var currentDiv = entry.target.closest(".body_left");
             var lazyImages = currentDiv.querySelectorAll(".lazy-image");

             lazyImages.forEach(function(lazyImage) {
                 lazyImage.src = lazyImage.dataset.src;
                 lazyImage.classList.remove("lazy-image");
                 observer.unobserve(lazyImage);
             });
         }
     });
 }