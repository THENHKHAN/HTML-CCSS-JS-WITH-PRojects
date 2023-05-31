
// REMARK: Since i am learnning and building Foundation writing every line/logic separately.
console.log("JS is LOADED.");

// list of array of dictionary in key-value pair

let listOfQuotes = [
  {
    "author": "Kevin Kruse",
    "quote": "Life isn’t about getting and having, it’s about giving and being."
  },
  {
    "author": "Napoleon Hill",
    "quote": "Whatever the mind of man can conceive and believe, it can achieve."
  },
  {
    "author": "Albert Einstein",
    "quote": "Strive not to be a success, but rather to be of value."
  },
    {
      
      "author": "Robert Frost",
       "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all thedifference."
    },
    {
        "author": "Florence Nightingale",
      "quote": "I attribute my success to this: I never gave or took any excuse."
    },
    {
      "author": "Wayne Gretzky",
      "quote": "You miss 100% of the shots you don’t take."
    },
    {
        "author": "Roger Staubach",
      "quote": "There are no traffic jams along the extra mile."
    },
    {
        "author": "George Eliot",
      "quote": "It is never too late to be what you might have been."
    },
    {
        "author": "Oprah Winfrey",
      "quote": "You become what you believe."
    },
    {
        "author": "Vincent van Gogh",
      "quote": "I would rather die of passion than of boredom."
    }
];


function getRandIndexOfArray  (arrLen) {

  let ranInd = Math.floor(Math.random() * arrLen )// to generate 0 to less than arrLen.Which makes n-1 Ind is last.
  return ranInd
}


let btn = document.getElementById("btn");
let quote = document.getElementById("quote");
let author = document.getElementById("author");

console.log("grab btn: " + btn);
console.log("grab btn: " + btn.innerHTML);

btn.addEventListener("click", () => {
  console.log("Yes eventListener is Working!");

  let ranInd = getRandIndexOfArray(listOfQuotes.length) // getting random index
 console.log(`ranInd: ${ranInd}`); 
  let auth = listOfQuotes[ranInd].author // getting author name from key author
  let quot = listOfQuotes[ranInd].quote

   console.log(`auth: ${auth}`);// show on console the author name
   console.log(`quot: ${quot}`); // author quote

  console.log(`quote: ${quote.innerHTML}`);
  console.log(`author: ${author.innerHTML}`);

quote.innerHTML=`${quot}`
author.innerHTML=`- ${auth}`

});
