document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const birthdateInput = document.getElementById("birthdate");
    const resultParagraph = document.getElementById("result");
 
    calculateButton.addEventListener("click", function () {
        const birthdate = new Date(birthdateInput.value);
        const currentDate = new Date();

        if ( birthdate=="Invalid Date"){
            alert("Please enter a valid Date.")
        }
        else{
             // Calculate age in years
            let ageYears = currentDate.getFullYear() - birthdate.getFullYear();

            // Calculate age in months
            let ageMonths = currentDate.getMonth() - birthdate.getMonth();
            if (ageMonths < 0) {
                ageYears--;
                ageMonths += 12;
            }
    
            // Calculate age in days
            let ageDays = currentDate.getDate() - birthdate.getDate();
            if (ageDays < 0) {
                ageMonths--;
                const lastMonthDate = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    0
                ).getDate();
                ageDays += lastMonthDate;
            }
    
            resultParagraph.textContent = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
      
        }
       
          });
});
