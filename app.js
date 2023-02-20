// classList - shows/gets all classes an element has.
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector('.nav-toggle') // targeting hamburger menu button
const links = document.querySelector('.links') //targeting unordered list

navToggle.addEventListener("click", function() {
    console.log(links.classList);
});


