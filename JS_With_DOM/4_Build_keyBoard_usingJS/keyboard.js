// for (i = 65; i <= 90; i++) {
//   const char = String.fromCharCode(i); //   method converts Unicode values to characters or string.
//   console.log("chra: " + i + " : " + char);
// }

console.log("JS is loaded");

function getLetter(id) {
  const letter = document.getElementById(id).innerText;
  console.log(letter); // to show on console
  const key = document.getElementById("key");
  key.innerText = letter;
  key.style.color = "yellow";
}
// textContent: represents the text content of the node and its descendants
for (key = 65; key <= 90; key++) {
  const getParent = document.getElementById("parent");
  const button = document.createElement("button");
  console.log("button created : " + button);
  const char = String.fromCharCode(key);
  const span = document.createElement("span"); // sine need small key one after other i.e. why span node
  button.appendChild(span); // inserting inside the Button element
  span.style.fontSize = "43px";
  span.appendChild(document.createTextNode(char)); // inserting inside the span element
  getParent.appendChild(button);
  button.setAttribute("id", char); // char varibale will become id. 2nd arg automatically get converted into strign. So dont ever do that by yourself.
  button.style.padding = "31px";
  button.style.margin = "10px";
  //   console.log("span created : " + span);
  button.onclick = function () {
    getLetter(char); // send char  as id
  };
}
