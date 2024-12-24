/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/

const text = document.querySelector(".text")
const remove = document.querySelector(".bi-arrow-left-square-fill")
const deletes = document.querySelector(".bi-eraser-fill")
const bold = document.querySelector(".bi-type-bold")
const italic = document.querySelector(".bi-type-italic")

remove.addEventListener("click", ()=>{
    text.value = text.value.slice(0, -1)
})

deletes.addEventListener("click", ()=>{
    text.value = ''
})

bold.addEventListener("click", ()=>{
    if(text.style.fontWeight === "bold"){
        text.style.fontWeight = "normal"
    }else { text.style.fontWeight = "bold"}
   
})

italic.addEventListener("click", ()=>{
    if(text.style.fontStyle === "italic"){
        text.style.fontStyle = "normal"
    }else { text.style.fontStyle = "italic"}
})