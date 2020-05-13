/**
 * Define Global Variables
*/
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Begin Main Functions
 *
*/

// build the nav
const navbarBuilder = () => {
  // get UL in variable
  const unorderList = document.getElementById('navbar__list');
  // get all sections in a list
  sections.forEach(section => {
      //imstead of log section.id, will add it to ht  'ul li a'
      const newElement = document.createElement('li');
      const newLink = document.createElement('a');
      newLink.textContent = section.id;
      newLink.href = `#${section.id}`;
      newElement.appendChild(newLink);
      unorderList.appendChild(newElement);
 });
};
// Add class 'active' to section when near top of viewport
const setActive = () => {


  sections.forEach(section => {
    var rect = section.getBoundingClientRect();
    y = rect.top;
    sectionHeight = rect.height;
    console.log("Top: " + y +", Height: " + sectionHeight);
    if(y <= 100 && y > -(sectionHeight)){
      // console.log(section.id); //for test
      section.classList.add("your-active-class");
    }
    else{
      // console.log(`5555555555555555555${section.id}`); //for test
      section.classList.remove("your-active-class");
    }

  });
}
// scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
navbarBuilder();
// Set sections as active
// setActive();
document.addEventListener("scroll", setActive);
// Scroll to section on link click
