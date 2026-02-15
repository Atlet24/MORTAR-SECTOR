// script.js

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(`Submitting form with data: ${JSON.stringify(Object.fromEntries(formData.entries()))}`);
    // Example: send formData to server or handle it further
});

// Scroll Animations
const animatedElements = document.querySelectorAll('.animate');
const options = { threshold: 0.1 }; 
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

animatedElements.forEach(element => {
    observer.observe(element);
});