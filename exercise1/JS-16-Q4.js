// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer

const stars = document.querySelectorAll(".star")


 function changeColor(star){
     star.style.backgroundColor = star.style.backgroundColor === "yellow" ? "white" : "yellow";
 }

stars.forEach(star => {
    star.addEventListener("click", ()=> {
        star.style.color = "yellow"
})
})