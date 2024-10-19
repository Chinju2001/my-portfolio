// Smooth scrolling for navigation links
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId); // Select the target section
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Display thank you message
    document.getElementById('thankYouMessage').style.display = 'block';

    // Optionally reset the form fields after submission
    this.reset();
});
