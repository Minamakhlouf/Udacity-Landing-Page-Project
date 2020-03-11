/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section"); 

function createNav() {
    for(let i = 0; i < sections.length; i++) {
        let list = document.createElement("li"); 
        list.textContent = `${sections[i].id}`
        navbarList.appendChild(list)
    }; 
};

function removeActiveClass() {
    for(let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("your-active-class");
    };
};

function respondToTheClick(evt) {
    removeActiveClass();
    let variable = evt.target.textContent; 
    let sectionTarget = document.querySelector(`#${variable}`); 
    sectionTarget.classList.add("your-active-class");
    sectionTarget.scrollIntoView({behavior: "smooth"});
};

function respondToScroll() {
    for(let i = 0; i < sections.length; i++) {
        if(sections[i].getBoundingClientRect().top < 50 && sections[i].getBoundingClientRect().bottom > 0) {
            sections[i].classList.add("your-active-class"); 
        } else {
            sections[i].classList.remove("your-active-class"); 
        };
    };
};


window.addEventListener("DOMContentLoaded", createNav);
navbarList.addEventListener("click", respondToTheClick); 
document.addEventListener("scroll", respondToScroll); 





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


