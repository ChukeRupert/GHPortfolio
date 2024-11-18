document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');
    // Add your JavaScript functionality here
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const links = document.querySelectorAll('nav ul li a');
    const skillCategories = document.querySelectorAll('.skill-category');

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        links.forEach(link => link.classList.toggle('dark-mode'));
        skillCategories.forEach(category => category.classList.toggle('dark-mode'));
    });
});