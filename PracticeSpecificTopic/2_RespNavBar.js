

let searchBtn = document.querySelector(".searchBtn");

let closeBtn = document.querySelector(".closeBtn");

let searchBox = document.querySelector(".searchBox");


// lets work on search button/icon. When this active then remove search
searchBtn.onclick = function() {

    searchBox.classList.add("active");
    closeBtn.classList.add("active");
    searchBtn.classList.add("active");

}

// lets work on close button/icon and removing the  searchBox button functonality.
closeBtn.onclick = function() {

    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBtn.classList.remove("active");

}

