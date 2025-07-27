// JavaScript for mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
// Add active class to navigation links based on scroll position (optional, for visual feedback)
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) { // Adjust offset as needed
        current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('text-indigo-600', 'font-semibold');
        link.classList.add('text-gray-600', 'font-medium');
        if (link.href.includes(current)) {
            link.classList.add('text-indigo-600', 'font-semibold');
            link.classList.remove('text-gray-600', 'font-medium');
        }
    });
});