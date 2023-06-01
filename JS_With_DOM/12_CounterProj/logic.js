
console.log("JS Loaded!")

let incr = document.querySelector(".incr");
let decr = document.querySelector(".decr");
let reset = document.querySelector(".reset");
let output = document.querySelector("#result");


// lets check whether we got element or not using console:

console.log(`Incre: ${incr.innerHTML}`);
console.log(`decr: ${decr.innerHTML}`);
console.log(`reset: ${reset.innerHTML}`);
console.log(`output: ${output.innerHTML}`);

// now lets write logic
// there are multiple method but i am using intermediate logic.
let allBtns = document.querySelector("#allBtns") // get list of element
console.log(   `allBtns : ${allBtns.innerHTML}`)

//  now we'll get the specific btn using event handler i.e. target then we'll compare

allBtns.addEventListener('click',counter)

let count = 0
function counter (e) {
    let ele = e.target // getting element
    console.log(`element: ${ele} `)// clicked btn
    console.log(`content: ${ele.innerHTML} `)// content
    console.log(`Pressed btn: ${ele.className} `) //class name

    // now we'll compare according to clicked btn

    if (ele.className==="decr style"){

        count -= 1;
        console.log(`counter: ${count}`)
        
    }

    
    else if (ele.className==="reset"){
         count = 0
         console.log(`counter: ${count}`)
    }
   
else{
        count += 1
         console.log(`counter: ${count}`)
}
 output.innerHTML = count

   

}
