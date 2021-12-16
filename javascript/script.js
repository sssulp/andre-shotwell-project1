// arrow menu function
// declare namespace variable
const arrow = document.getElementById('nav-trigger');
const arrowLinks = document.querySelector('.arrow-links');

// menu to appear on click event
arrow.addEventListener('click', function() {
    // make menu visible
    arrowLinks.classList.toggle('show');
});