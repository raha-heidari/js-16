// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer

const closee = document.querySelector(".ri-close-line")
const msg = document.querySelector(".message")
closee.addEventListener("click", ()=>{
   msg.style.display = "none"
})
