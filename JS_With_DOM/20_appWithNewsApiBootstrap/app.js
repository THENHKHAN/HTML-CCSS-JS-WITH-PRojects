
console.log("JS is Connected........");

// defining variables

const general = document.querySelector("#general")
const technology = document.querySelector("#technology")
const sports = document.querySelector("#sports")
const weather = document.querySelector("#weather")
const searcBtn = document.querySelector("#searcBtn")


const newsQuery = document.querySelector("#news-Query")



// API
var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-11-01&' + // it will show from this date
          'sortBy=popularity&' +
          'apiKey={apiKey}';


const fetchingApi= async() =>{
    const fetchApi = await fetch(url)
    const raw = await fetchApi.json()
    console.log(raw);
    console.log("bbb");
    
}

fetchingApi()