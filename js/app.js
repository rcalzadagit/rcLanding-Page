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

//////////////////////////////////////////////////////////////////////////
// After no scroll or click activity the navbar hides ////////////////////
const header = document.querySelector('.page__header');

window.onscroll = function() {
  header.style.display = "block";
};

function hideMenu() {
  header.style.display = "none";
};

window.addEventListener("click", function() {
    setTimeout("hideMenu()", 50000);
   
});
///////////////////////////////////////////////////////////////////////////

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 *
*/

/////////////////////////////////////////////////////////////////////////////
// Menu
// Scroll to section on link click

var a = document.createElement("a");
var dlist = document.getElementById("navbar__list");
var newMenu = document.createElement("li");

a.textContent = "Section 1";
a.setAttribute('href', "#section1");
a.setAttribute("class", "target");
newMenu.appendChild(a);
dlist.appendChild(newMenu);

var a = document.createElement("a");
var dlist = document.getElementById("navbar__list");
var newMenu = document.createElement("li");
 
a.textContent = "Section 2";
a.setAttribute('href', "#section2");
a.setAttribute("class", "target");
newMenu.appendChild(a);
dlist.appendChild(newMenu);

var a = document.createElement("a");
var dlist = document.getElementById("navbar__list");
var newMenu = document.createElement("li");
 
a.textContent = "Section 3";
a.setAttribute('href', "#section3");
a.setAttribute("class", "target");
newMenu.appendChild(a);
dlist.appendChild(newMenu);

var a = document.createElement("a");
var dlist = document.getElementById("navbar__list");
var newMenu = document.createElement("li");
 
a.textContent = "Section 4";
a.setAttribute('href', "#section4");
a.setAttribute("class", "target");
newMenu.appendChild(a);
dlist.appendChild(newMenu);


//////////////////////////////////////////////////////////////////////
// Back to Top Button appears after Section 1.    //

window.addEventListener("scroll", function(event) {
  var top = this.scrollY

if (top < 500) {
  document.querySelector(".back-to-top-link").style.display = "none";
} else {
  document.querySelector(".back-to-top-link").style.display = "block";
}
});

///////////////////////////////////////////////////////////////////////////////////////
// Sections Active Background color area. 

        window.addEventListener("scroll", function(event) {
          let vnow1 = this.scrollY
        
        if (vnow1 < 550) {
          document.querySelector("#section1").classList.add("your-active-class");
        } else {
          document.querySelector("#section1").classList.remove("your-active-class");
        }
        });
////////////////////////////////////////////////////////////////////////////////////////
        window.addEventListener("scroll", function(event) {
          let vnow2 = this.scrollY 
        
        if (vnow2 > 551 || vnow2 <= 1000) {
          document.querySelector("#section2").classList.add("your-active-class");
        } else {
          document.querySelector("#section2").classList.remove("your-active-class");
        }
        });
//////////////////////////////////////////////////////////////////////////////////////////
        window.addEventListener("scroll", function(event) {
          let vnow3 = this.scrollY
            
        if (vnow3 >= 1001 || vnow3 <= 1500) {
          document.querySelector("#section3").classList.add("your-active-class");
        } else {
          document.querySelector("#section3").classList.remove("your-active-class");
        }
        });
  ////////////////////////////////////////////////////////////////////////////////////
        window.addEventListener("scroll", function(event) {
          let vnow4 = this.scrollY
            
        if (vnow4 > 1501) {
          document.querySelector("#section4").classList.add("your-active-class");
        } else {
          document.querySelector("#section4").classList.remove("your-active-class");
        }
        });
