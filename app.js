// Variables
const hamburger = document.querySelector(".hamburger-icon"),
      closeIcon = document.querySelector(".close-icon"),
      overlay = document.querySelector(".overlay"),
      list = document.querySelector(".nav__items");
// Functions
const openList = () =>{
  hamburger.classList.add("hide");
  closeIcon.classList.remove("hide");
  overlay.classList.add("show");
  list.classList.add("open");
  console.log("clicked")
}
const closeList = () =>{
  hamburger.classList.remove("hide");
  closeIcon.classList.add("hide");
  overlay.classList.remove("show");
  list.classList.remove("open");
}
// Events
hamburger.addEventListener( "click" , openList);
closeIcon.addEventListener("click" , closeList);
