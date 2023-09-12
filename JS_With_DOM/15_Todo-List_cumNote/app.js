


const inputText = document.getElementById("input_box");
const taskList = document.getElementById("list_container");
const btn = document.getElementById("btn");



function addTask (e){
    var flag = true
    if (inputText.value ===''){
        flag = false
        if (flag){
            alert("You must write something to Add in note!")
        }
    }
    else{

        let li = document.createElement("li")
        li.innerHTML = inputText.value
        taskList.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

        
       }
    inputText.value='' // to make the input box empty after adding into note  
    saveData(flag)
}


btn.addEventListener('click' , addTask)
// to delete and checked(complete task) on lists

taskList.addEventListener('click' , (e) => {
    flag = false
    // console.log(e.target.tagName) // will give element tag name (IN-uPPER CASE)
    if (e.target.tagName==='LI'){ // here e.target.tagName= GIVE- 'LI' not li
        
            e.target.classList.toggle("checked") // it will add a checked class all li element.And remove if it already there SINCE toggle.

            saveData(flag)
    } 
    else if (e.target.tagName==='SPAN'){
        flag = true
        e.target.parentElement.remove() // SINCE x PARENT IS li so removed whole li element of that X.
        if (flag){
            setTimeout(()=>alert("Data Deleted from local storage."),2000)
            flag = false
        }
        saveData(flag)

    }
})


// way of saving data in browser local storage 
function saveData(flag){
    // console.log (taskList.innerHTML)
    localStorage.setItem("myNoteData", taskList.innerHTML); // key ,value pair
    // let getDataFromLocalStorage = localStorage.getItem("myNoteData") // to get the element at that key
    // console.log(`local Stored data : ${getDataFromLocalStorage} `)
    if (flag){
        setTimeout(()=>alert("Data is added to local storage."),2000)
        flag = false
    }
    
}

function showData(){
    taskList.innerHTML = localStorage.getItem("myNoteData")
    // console.log(`All local showData : ${taskList.innerHTML} `)

}

showData()

// function clearAllLocalStorage(){
//     localStorage.clear();
// }

// clearAllLocalStorage()