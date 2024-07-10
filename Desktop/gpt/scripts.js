
document.addEventListener('DOMContentLoaded', function() {
    // Responsive Navigation Menu
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<span></span><span></span><span></span>';
    document.querySelector('nav').prepend(navToggle);

    navToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Image Carousel
    const heroImages = [
        'images/school-building.jpg',
        'images/classroom.jpg',
        'images/students.jpg'
    ];

    let currentImageIndex = 0;
    const heroSection = document.querySelector('.hero img');

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroSection.src = heroImages[currentImageIndex];
    }, 5000); // Change image every 5 seconds
});
