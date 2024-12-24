// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:

const icon = document.querySelector(".cards__card__img__icon i")
const counter = document.querySelector("#counter")

let count = 100
icon.addEventListener("click", ()=>{
    icon.style.color = "red"
    count++;
    counter.textContent = count
})


