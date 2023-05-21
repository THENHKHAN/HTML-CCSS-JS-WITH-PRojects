console.log("JS is Loaded .");

function toggleMe() {
  console.log("Button working ");

  const body = document.body; // since we to apply on whole body
  console.log("body : " + body);
  body.classList.toggle("darkModeColor");
  body.style.transition = ".7s";
}

// onclick = "toggleMe()";
document.getElementById("mode").onclick = () => {
  toggleMe();
};
