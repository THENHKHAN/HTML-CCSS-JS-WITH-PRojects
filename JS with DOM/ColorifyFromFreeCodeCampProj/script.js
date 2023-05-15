

// document.write("hello <br> world") ;
console.log('Script Loaded...');

function paint (color) {

    console.log(color);
    const getCircle = document.getElementById("circleID_toToMakeDynamic")
   // now let's apply style since we had circle now
    getCircle.style = `background-color:${color}`
     console.log(getCircle);
     console.log("finished");
}

// function paint(color) {
//   const circle = document.getElementById('circleID_toToMakeDynamic');
//   circle.style = `background-color:${color}`;
// }