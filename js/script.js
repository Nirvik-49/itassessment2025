// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add('navbar-cng');
    } else {
        navbar.classList.remove('navbar-cng');
    }
});

// Navbar collapse handling
const navbarCollapse = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');

navbarShowBtn.addEventListener('click', () => {
    navbarCollapse.classList.add('navbar-collapse-rmw');
});

navbarCloseBtn.addEventListener('click', () => {
    navbarCollapse.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if (e.target.id !== 'navbar-collapse' && e.target.id !== 'navbar-show-btn' && e.target.parentElement.id !== 'navbar-show-btn') {
        navbarCollapse.classList.remove('navbar-collapse-rmw');
    }
});

// Prevent transition and animation during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// Contact form validation


// JavaScript validation code here
const contactForm = document.querySelector('.contact-form');
const errorMessageDiv = document.getElementById('error-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    errorMessageDiv.style.display = 'none'; // Hide previous error messages
    errorMessageDiv.textContent = ''; // Clear previous error messages

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    // Validate the inputs
    if (name === '') {
        errorMessageDiv.textContent = 'Please enter your name.';
        errorMessageDiv.style.display = 'block'; // Show error message
        return;
    }
    if (email === '') {
        errorMessageDiv.textContent = 'Please enter your email.';
        errorMessageDiv.style.display = 'block'; // Show error message
        return;
    }
    if (!validateEmail(email)) {
        errorMessageDiv.textContent = 'Please enter a valid email address.';
        errorMessageDiv.style.display = 'block'; // Show error message
        return;
    }
    if (message === '') {
        errorMessageDiv.textContent = 'Please enter your message.';
        errorMessageDiv.style.display = 'block'; // Show error message
        return;
    }

    // If all validations pass, you can submit the form or perform further actions
    alert('Form submitted successfully!');
    // Optionally, you can submit the form here if needed
    // contactForm.submit();
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

