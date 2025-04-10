import { displayPopup, hidePopup } from "../index/index.js";

const toScienceGrant = document.querySelector(".toScienceGrant");
const scienceGrantPage = document.querySelector(".scienceGrantPage");
const scienceGrantClose = document.querySelector(".scienceGrantClose");
const scienceGrantOpacity = scienceGrantPage.querySelector('.click-opacity');

function showMathGrantPage(e) {
  displayPopup(scienceGrantPage);
  animationMathGrant();
  scienceGrantOpacity.addEventListener("click", onOpacity);
}
function closeMathGrantPage() {
  reverseAnimation();
  hidePopup(scienceGrantPage);
  scienceGrantOpacity.removeEventListener("click", onOpacity);
}

function onOpacity(e) {
  if(e.target.classList.contains('click-opacity')) {
    closeMathGrantPage();
  }
};

toScienceGrant.addEventListener("click", showMathGrantPage);
scienceGrantClose.addEventListener("click", closeMathGrantPage);


//animation elements

const sidebarIcons = document.querySelectorAll(".sidebar__img");
const grantItems = document.querySelectorAll(".grant-item");
const chartValues = document.querySelectorAll(".chart-description-row");
// const mathGender = document.querySelectorAll(".mathGender");

function animationMathGrant() {
  Array.from(sidebarIcons)
    .reverse()
    .forEach((item, idx) => {
      const t = setTimeout(() => {
        item.classList.remove("moveToRight");
        clearTimeout(t);
      }, idx * 100 + 50);
    });
  grantItems.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("scaleX");
      clearTimeout(t);
    }, idx * 100);
  });
  chartValues.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveUp");
      clearTimeout(t);
    }, idx * 110);
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item, idx) => {
    item.classList.add("moveToRight");
  });
  grantItems.forEach((item, idx) => {
    item.classList.add("scaleX");
  });
  chartValues.forEach((item, idx) => {
    item.classList.add("moveUp");
  });
}
