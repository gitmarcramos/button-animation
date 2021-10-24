const svgs = document.querySelectorAll("svg");
const svgIcons = document.querySelectorAll(".svg-icon");
const icons = document.querySelectorAll(".icon");

function iconAnimate(item) {
  item.classList.toggle("svg-animate");
}

function svgFill(item) {
    item.classList.toggle("svg-fill");
}

icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    iconAnimate(e.currentTarget.querySelector('.svg-icon'));
    svgFill(e.target);
  });
});


/* -------------------------------------------------------------------------- */
/*         //! need to restore the transition on removing the SVG fill        */
/* -------------------------------------------------------------------------- */