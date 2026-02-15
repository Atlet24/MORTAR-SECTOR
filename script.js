// script.js

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    console.log(data);
    alert('Form submitted successfully!'); // Replace with actual form submission logic
});

// Animations
const elements = document.querySelectorAll('.animate');
elements.forEach(element => {
    element.classList.add('fade-in');
});

// CSS Animation Style
const style = document.createElement('style');
style.innerHTML = `
.fade-in {
    opacity: 0;
    animation: fadeIn 2s forwards;
}
@keyframes fadeIn {
    to { opacity: 1; }
}`;
document.head.appendChild(style);
