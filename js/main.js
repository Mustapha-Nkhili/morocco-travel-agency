const sliderContainer = document.querySelector("#sliderContainer");
const arrowsBtn = document.querySelectorAll(".slider button");
const firstImg = document.querySelector(".box img");
const copyrightYear = document.querySelector("#copyrightYear");

// get the width of the first img and add to it the gap value
const firstImgWidth = firstImg.clientWidth + 30;
let scrollWidth = sliderContainer.scrollWidth - sliderContainer.clientWidth;

arrowsBtn.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("arrow-left")) {
      sliderContainer.scrollLeft -= firstImgWidth;
      hideShowIcons();
    } else {
      hideShowIcons();
      sliderContainer.scrollLeft += firstImgWidth;
    }
  });
});

function hideShowIcons() {
  arrowsBtn[0].style.display =
    sliderContainer.scrollLeft === 0 ? "none" : "block";
  arrowsBtn[1].style.display =
    sliderContainer.scrollLeft === scrollWidth ? "none" : "block";
}

copyrightYear.textContent = new Date().getFullYear();