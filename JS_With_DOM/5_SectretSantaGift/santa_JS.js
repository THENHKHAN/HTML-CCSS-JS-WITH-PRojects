console.log("JS loaded !!");

const gifts = ["hoodie", "moonlight", "perfumes", "watch", "studio_light"];

const getRandomElem = (arr) => {
  elem = arr[Math.floor(Math.random() * arr.length)];
  return elem;
};
// const giftsImg = [ // we'll dynamically throught loop
//   "./gift_Images/hoodie.png",
//   "./gift_Images/moon-light.png",
//   "./gift_Images/watch.png",
//   "./gift_Images/perfumes.png",
//   "./gift_Images/studio-ligth.png",
// ];
const participants = ["Alex", "Bob", "Carl", "Dell", "Emle"]; // from here we'll random pick santa and child BUT not both name sant and child(we'll right logic for it - we'll use filter so that no contradiction occur)

function play() {
  const giftItem_Id = document.getElementById("gift-id"); // need to put content at this id place
  const childElem = document.getElementById("child-id");
  const santaElem = document.getElementById("santa-id");

  Child = getRandomElem(participants); // get child names
  Santa = getRandomElem(participants.filter((elem) => elem !== Child)); // get Santa names
  giftItem_Name = getRandomElem(gifts); // get gift name from the above defined list of gifts.We'll use this in loop to not writing local gift image file path.

  childElem.innerText = "";
  childElem.innerText = Child;
  santaElem.innerText = "";
  santaElem.innerText = Santa;

  giftItem_Id.innerHTML = ""; // clearing previous or existing content
  gift_img_elemCreate = document.createElement("img");
  // creating img element inside the gift-id to display image
  giftItem_Id.appendChild(gift_img_elemCreate);
  console.log(`${Santa} to give ${giftItem_Name} to ${Child}`);

  gift_img_elemCreate.src = `./gift_Images/${giftItem_Name}.png`; // it will append the img
  gift_img_elemCreate.alt = giftItem_Name;
  gift_img_elemCreate.width = "280";
  gift_img_elemCreate.height = "250";
}

const addToFooter = () => {
  const footerElem = document.getElementById("footer-id");
  footerElem.innerText = `CopyRight ${new Date().getFullYear()} @NHKHAN`;
  footerElem.style.color = "white";
  // footerElem.style.background = "blue";
};

addToFooter();
// play(); don't use since JS will call this when Click event will occur.
