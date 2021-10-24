const svg = document.querySelector("svg");
const svgIcon = document.querySelector(".svg-icon");
const icon = document.querySelector(".icon");

function animate() {
  svgIcon.classList.toggle("svg-animate");
  svg.classList.toggle("svg-fill");
  console.log("Clicked");
}

icon.addEventListener("click", animate);
