// TOGGLE FUNCTIONAILITY USING JAVASCRIPT

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


    // LINES 30-38 IS HOW I TOGGLE MY LINKS BY CLICKING THE HAMBURGER BUTTON.

    // LINE 40 SHOW ME AN EASIER WAY TO TOGGLE THE HAMBURGER BUTTON 


    // if(links.classList.contains('show-links')){ // if the links class contains another class alongside links called show-links then it is true
    //     links.classList.remove('show-links')
    // }// if show links is another class and true in the unordered list alongside .links then remove show links

    // // OTHERWISE(else) add show-links class to the unordered list alongside ul class="links"
    // // ul class="link show-links"
    // else{
    //     links.classList.add("show-links")
    // }

    links.classList.toggle("show-links")
    // I AM ACCESSING THE unordered list called links
    // using classList to check and to show me all of the classes that are in the unordered list called
    // links
});



// IMPORTANT PART WHEN USING THIS FOR NAVBAR(6:27)

// WHEN I AM ON A BIGGER SCREEN AND SETTING UP THE MEDIA QUERIES

// FOR THE .links i have to add height:auto (look at styles.css LINE 228)

// IF I DONT ADD THE height:auto;

// i have a weird height for my links
// because i added the show-links class

// the height for the show-links class was 10rem or 160px.
// that is why the links are massive and 
// if i move to a bigger screen the link will not show up because by 
// DEFAULT the link are not OPEN the overflow hidden in styles.css will take over
// and the height of 0









