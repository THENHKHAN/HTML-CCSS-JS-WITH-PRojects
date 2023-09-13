
const searchBtn = document.querySelector('button')
const inputText = document.querySelector('#input_text')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const weatherCard = document.querySelector('.weather')



const apiKey="key"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`

// let exApi =`https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=${apiKey}&units=metric`



const weather = (weatherType)=>{
    const weatherIcon = document.querySelector('.weather-icon')
   
    if (weatherType.toLowerCase()=="clouds"){
       weatherIcon.src = './images/clouds.png'
       console.log("weatherType-> " + weatherType)
    }

    else if (weatherType.toLowerCase()=="clear"){
        weatherIcon.src = './images/clear.png'
        console.log("weatherType-> " + weatherType)
     }

     else if (weatherType.toLowerCase()=="drizzle"){
        weatherIcon.src = './images/drizzle.png'
        console.log("weatherType-> " + weatherType)
     }

     else if (weatherType.toLowerCase()=="mist"){
        weatherIcon.src = './images/mist.png'
        console.log("weatherType-> " + weatherType)
     }

     else if (weatherType.toLowerCase()=="snow"){
        weatherIcon.src = './images/snow.png'
        console.log("weatherType-> " + weatherType)
     }

     else if (weatherType.toLowerCase()=="rain"){
        weatherIcon.src = './images/rain.png'
        console.log("weatherType-> " + weatherType)
     }

     else{
        weatherIcon.innerHTML = "Sorry don't have image"
        console.log("weatherType-> " + weatherType)
     }


}

   
async function checkWeather (inputCity){

    let raw = await fetch(apiUrl+`${inputCity}`+`&appid=${apiKey}`)
     let data = await raw.json()
    console.log(raw)
    console.log("Temp: "+data.main.temp)
    console.log("humidity: "+data.main.humidity)
    console.log("windSpeed: "+data.wind.speed)
    console.log("city: "+data.name) // city name
    console.log("weather type: "+data.weather[0].main) // city name

    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +" °C"
    document.querySelector('.city').innerHTML=data.name // get the city name and display
    
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%"
    document.querySelector('.wind').innerHTML=data.wind.speed +" km/h"
    weather(data.weather[0].main) // sending weather type to apply the weather type image
  
    weatherCard.style.display='block';// weather card will display detail when someone enter the city name and search button

   }


let takeInputText = ()=>{

   if (inputText.value ===''){ // it will only work if there is some input data
      alert("Please enter any city name!")
   }
else{

   const inputCity = inputText.value
   checkWeather(inputCity)
  
}   

}

searchBtn.addEventListener('click' , takeInputText)// to get the entered input data
