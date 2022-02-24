//Values
const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("section");

//Function to show how long is frm top to our position
const animateProgressBar = () => {
  let scrollDistance = -section.getBoundingClientRect().top;
  let progressWidth =
    (scrollDistance /
      (section.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;

  //Make nicer ...
  let value = Math.floor(progressWidth);

  progressBar.style.width = value + "%";
  //console.log(value);

  if (value < 0) {
    progressBar.style.width = "0%";
  }
};

//Event on window when scroll
window.addEventListener("scroll", animateProgressBar);
