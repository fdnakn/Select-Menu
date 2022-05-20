const selectField = document.getElementById("selectField");
const list = document.getElementById("list");
const options = document.querySelectorAll(".options");
const inputText = document.getElementById("inputText");





selectField.addEventListener("click",()=>{
    list.classList.toggle("hide");
})

options.forEach(option => {
    option.addEventListener("click",()=>{
        selectField.innerText=option.innerText;
        list.classList.toggle("hide");
        })
})