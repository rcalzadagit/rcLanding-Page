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
const header = document.querySelector('.page__header');

window.onscroll = function() {
  header.style.display = "block";
};

function hideMenu() {
  header.style.display = "none";
};

// After no scroll or click activity the navbar hides
window.addEventListener("click", function() {
    setTimeout("hideMenu()", 20000);
   
});


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// let sections = ["Section 1", "Section 2", "Section 3", "Section 4"];

// let navbar = document.querySelector('#navbar__list');

// for (let i = 0; i < sections.length; i++) {
//   let section = sections[i];

//   let listItem = document.createElement('li');
//   listItem.textContent = section;

//   navbar.appendChild(listItem);
// }


// Scroll to section on link click
var a = document.createElement("a");
var dlist = document.getElementById("navbar__list");
var newMenu = document.createElement("li");

a.textContent = "Section 1";
a.setAttribute('href', "#section1");
newMenu.appendChild(a);
dlist.appendChild(newMenu);

var a = document.createElement("a");
var dlist = document.getElementById("navbar__list");
var newMenu = document.createElement("li");
 
a.textContent = "Section 2";
a.setAttribute('href', "#section2");
newMenu.appendChild(a);
dlist.appendChild(newMenu);

var a = document.createElement("a");
var dlist = document.getElementById("navbar__list");
var newMenu = document.createElement("li");
 
a.textContent = "Section 3";
a.setAttribute('href', "#section3");
newMenu.appendChild(a);
dlist.appendChild(newMenu);

var a = document.createElement("a");
var dlist = document.getElementById("navbar__list");
var newMenu = document.createElement("li");
 
a.textContent = "Section 4";
a.setAttribute('href', "#section4");
newMenu.appendChild(a);
dlist.appendChild(newMenu);

//////////////////////////////////////////////////////////////

window.addEventListener("scroll", function(event) {
  var top = this.scrollY
      // left =this.scrollX;

if (top < 500) {
  document.querySelector(".back-to-top-link").style.display = "none";
} else {
  document.querySelector(".back-to-top-link").style.display = "block";
}
});

///////////////////////////////////////////////////////////////////////

document.addEventListener("click", function() {
  if (document.querySelector("#section1")) {
    div.classList.add(".your-active-class");
} else if 
  (document.querySelector("#section2")) {
  div.classList.add(".your-active-class");
  } else if 
    (document.querySelector("#section3")) {
      div.classList.add(".your-active-class");
      } else if 
        (document.querySelector("#section4")) {
          div.classList.add(".your-active-class");
          } else 
            div.classList.remove(".your-active-class");
            
          });
        
        
