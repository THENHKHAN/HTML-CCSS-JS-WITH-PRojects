
 let addFrnd= document.querySelector("#add");
 let rmvFrnd= document.querySelector("#remove");
 let istatus= document.querySelector("#strnger");
let flag = true // if Stranger

//  from two buttons i.e. addand remove
//  addFrnd.addEventListener('click',()=>{
// if(istatus.innerHTML == 'Stranger'){
//         istatus.innerHTML='Friend'
//         istatus.style.color = 'blue'
//     }     
//  })

//  rmvFrnd.addEventListener('click',()=>{
// if(istatus.innerHTML == 'Friend'){
//          istatus.innerHTML='Stranger'
//         istatus.style.color = 'red'
//     }
   
//  })


// from Using Only one button
 addFrnd.addEventListener('click',()=>{
if(flag==true){ // if already Stranger
        istatus.innerHTML='Friend'
        istatus.style.color = 'blue'
        addFrnd.innerHTML='Remove Friend'
        addFrnd.style.backgroundColor='red'
        flag = false
    
    }
   
else{ // if already friend
    
        istatus.innerHTML='Stranger'
        istatus.style.color = 'red'
        addFrnd.innerHTML='Add Friend'
        addFrnd.style.backgroundColor='rgb(56, 193, 147)'
        flag=true
    }    
 })