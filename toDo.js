console.log("Hello",document.querySelector(".addTodo"));
const todoButton=document.querySelector(".addTodo")
const inputField= document.querySelector(".todoValue")
const contentList=document.querySelector(".contentList")
todoButton.addEventListener("click", () => {
    console.log(inputField.value)
    const newDiv=document.createElement("div")
    
    const innerElement=`<span>${inputField.value}</span>
    <span class="deleteBox"><i class="fa-solid fa-trash"></i></span>`
newDiv.innerHTML=innerElement
    contentList.append(newDiv)
});


