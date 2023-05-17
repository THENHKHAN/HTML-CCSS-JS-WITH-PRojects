

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

function randomColors() {

    const getCircle = document.getElementById("circleID_toToMakeDynamic")
    const getRandomButton = document.getElementById("randomCol")
    console.log(`circle: ${getCircle}`);
    console.log(`getRandomButton: ${getRandomButton}`);
    
       var colors = [
            '#ff0000', '#00ff00', '#0000ff',
            '#ff3333', '#ffff00', '#ff6600',
            '#ff3332', '#ffef00', '#ff6610'
        ]; // letter we'll do it more adv
          
        // selecting random color
        var random_color = colors[(Math.floor(
                Math.random() * colors.length))];

        getCircle.style =`background-color:${random_color}`
        console.log(`color Code: ${random_color}`)
} 

