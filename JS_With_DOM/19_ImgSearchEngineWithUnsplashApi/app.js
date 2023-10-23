
console.log("JS is linked...");

var apiKey = "";
const searcBox = document.querySelector("#searc-box")
const searcForm = document.querySelector("#searc-form")
const searchResult = document.querySelector(".search-result")
const showMoreBtn = document.querySelector(".show-more")
const searchBtn = document.getElementById("search-btn")
var page = 1
var keyword = ""

// By default this api display 10 images per page . We can customize it.In the document, it given using per_page key

async function searchImg(apiKey ) {
    keyword = searcBox.value
    const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`
    let response =await fetch( apiUrl )
    const data = await response.json(response)
    console.log("data: " + JSON.stringify(data));
    console.log("results: " + data.results);
    const results = data.results // here that api results(list o object) be stored in results variable

    // now we have to get image 
    results.map((result)=>{

            const image = document.createElement("img") // creating image tag
            image.src = result.urls.small //img link given. we want the small image neither large not regural
            // lets make the image as link so that when use click on any image it will redirect them to the unsplash website
            // for that we need a anhcor tag
            const imgLink = document.createElement("a") // anhcor tag created.
            imgLink.href = result.links.html // exracted the html page/link
       
    //    lets add target so that when user click on the link it will redirect to the website
            imgLink.target = "_blank"
    // we need to place the img inside the a TAG
             imgLink.appendChild(image)  // now img will be inside the a tag


        // now where to keep this??? . We have alread defined a div for the result display
             searchResult.appendChild(imgLink) // this anchor tag will be placed inside the searchResult element


    })
    // after loading 12 images this show more button should be available so that user can see more as they needed
    showMoreBtn.style.display = "block"
    // now lets make it clickable.
}

  // Function to read the API key from a text file
function readApiKey(e) {
    e.preventDefault()
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "unsplashApiKey.txt", true);
    rawFile.onreadystatechange = async function() {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
            apiKey = rawFile.responseText.trim(); // Remove any extra whitespace
            console.log("apiKey:" + apiKey);
            searchImg (apiKey)
            showMore(apiKey)

        }
    };
    rawFile.send(null);
}


searchBtn.addEventListener("click", (e) => {
    readApiKey(e)  
})

