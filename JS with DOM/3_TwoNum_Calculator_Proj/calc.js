console.log("JS Loading Finished..........")


function calculate(clickBtnId) { // as id rcv in the string form of element

    console.log("function binded...")
    console.log("clickBtnId...: " + clickBtnId)
  
     // console stuff
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    // let output = document.getElementById("output");
    console.log(`num1: ${num1}  And its type is : ${typeof num1}` )
    console.log(`num2: ${num2}  And its type is : ${typeof num2}` )
    // let stringToInt = parseInt(num1) // to make int
    // let stringToInt = Number(num1) // to make int
    let stringToInt = +num1 // to make int .... all are correct
    console.log(`parseInt(num1): ${stringToInt}  And its type is : ${typeof stringToInt}` )
    console.log(`parseInt(num2): ${Number(num2)}  And its type is : ${typeof parseInt(num2)}` )
   

// logic
    num1 = +num1 // typeCasted in valid number
    num2 = +num2

    switch(clickBtnId) {
  case "add":   
    console.log("sum : " + (num1+num2));
     sum = num1 + num2
    document.getElementById("outputAdd").innerHTML =sum
    break;

  case "sub": 
     console.log("sub : " +(num1-num2));
     sub = num1 - num2
    document.getElementById("outputSub").innerHTML= sub
    break;
  case "multi":
    console.log("multi : " + (num1*num2));
    prod = num1 * num2
    document.getElementById("outputMult").innerHTML = prod
    break;

    case "divide":
    console.log("divide : " + (num1/num2))
    div = num1 / num2
   document.getElementById("outputDiv").innerHTML = div
    break;
  default:
    console.log("Please enter a valid number..")
}

}