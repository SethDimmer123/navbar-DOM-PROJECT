// classList - shows/gets all classes an element has.
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector('.nav-toggle') // targeting hamburger menu button
const links = document.querySelector('.links') //targeting unordered list

navToggle.addEventListener("click", function() {
    console.log(links.classList); // THIS SHOWS ME ALL THE CLASSES I HAVE FOR HTML element Links because i am accessing the unordered list with a class of links and using classList to show the classes that are connected to the unordered list
    console.log(links.classList.contains('random')); // whatever is 
    // inside of the yellow contains() is the class i am CHECKING FOR
    // if i get a FALSE in the console when checking if in this case my ul class of links 
    // contains a class of whatever it is containing in this case a class of 'random'
    // it is becuase the class of random DOES NOT EXIST IN MY UNORDERED LIST.(3:27)


    console.log(links.classList.contains('links'));
    // in this case on line 20 i should get true because links classes EXISTS 
    // on my unordered list.
});


