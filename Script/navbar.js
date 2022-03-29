//NAVIGATION BAR REPSONSIVE HAMBURGER ICON JAVASCRIPT
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
//SHOW THE NAVIGATION LINKS ONCLICK
toggleButton.addEventListener('click',() => {
  navbarLinks.classList.toggle('active')
})
