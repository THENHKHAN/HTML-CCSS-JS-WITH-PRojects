console.log("JS Working....")
let open  = document.querySelector("#popup")
console.log("ButtonSelection: " , open);

function openPopPup(){

    // adding class
    open.classList.add("open_pop")

}

function closePopup(){

    // removing class
    open.classList.remove("open_pop")
    
}