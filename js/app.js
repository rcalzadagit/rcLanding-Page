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
// window.onscroll = function() {
//     navList.style.display = "flex";
// };
// // After no scroll or click activity the navbar hides
// window.addEventListener("click", function() {
//     setTimeout("hideMenu()", 50000);
// });


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

let sections = ["Section 1", "Section 2", "Section 3", "Section 4"];

let navbar = document.querySelector('#navbar__list');

for (let i = 0; i < sections.length; i++) {
  let section = sections[i];

  let listItem = document.createElement('li');
  listItem.textContent = section;

  navbar.appendChild(listItem);
}


// Scroll to section on link click
let menu = document.getElementById("#navbar__List");
let li = document.getElementsByTagName("li");
let page = document.getElementByTagName("section");

document.addEventListener('click', function(){
  if  (document.menu.li.innerHTML = "Section 1") {
    page = "#section1".scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
   } else {
 if  (document.menu.li.innerHTML = "Section 2") {
  page = "#section2".scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
 } else { 
   if (document.menu.li.innerHTML = "Section 3") {
    page = "#section3".scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
   } else {
     if (document.menu.li.innerHTML = "Section 4") {
      page = "#section4".scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  } 
 }
}
   }
})
 





