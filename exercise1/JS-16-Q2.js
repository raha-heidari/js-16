//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:

const btnChange = document.querySelector(".cards__card__footer__btn p")
btnChange.addEventListener("click", ()=>{
    btnChange.innerText = "Added to Cart"
    btnChange.disabled = true
    btnChange.style.color = "gray"
})
