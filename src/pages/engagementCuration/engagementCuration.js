import "../../common/ui/twoValuesRow/twoValuesRow.css";

import { displayPopup, hidePopup } from "../index/index";

const toEngagementCuration = document.querySelector(".toEngagementCuration");

const engagementCurationClose = document.querySelector(
  ".engagementCurationClose"
);
const engagementCurationPage = document.querySelector(
  ".engagementCurationPage"
);

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeEngagementCurationPage();
  }
}

function showEngagementCurationPage(e) {
  displayPopup(engagementCurationPage);
  engagementCurationPage.addEventListener("click", onOpacity);

  animationEngagementCuration();
}
function closeEngagementCurationPage() {
  reverseAnimation();
  hidePopup(engagementCurationPage);
  engagementCurationPage.removeEventListener("click", onOpacity);
}
toEngagementCuration.addEventListener("click", showEngagementCurationPage);
engagementCurationClose.addEventListener("click", closeEngagementCurationPage);

//animation elements

const sidebarIcons = document.querySelectorAll(
  ".engagementCurationPage .sidebar-vertical-item"
);
const engagementCurationBars = document.querySelectorAll(
  ".engagement-curation-content .item-s-cur"
);
const engagementCurationMobileBars = document.querySelectorAll(
  ".engagement-curation-content .bar-graph-58"
);

const engagementCurationDetails = document.querySelectorAll(
  ".engagement-curation-content .detail"
);
const twoValRowsEngagementCuration = document.querySelectorAll(".engagement-curation-content .twoValuesRow")

function animationEngagementCuration() {
  Array.from(sidebarIcons)
    .reverse()
    .forEach((item, idx) => {
      const t = setTimeout(() => {
        item.classList.remove("moveToRight");
        clearTimeout(t);
      }, idx * 100 + 50);
    });
  engagementCurationBars.forEach((info, idx) => {
    const t = setTimeout(() => {
      info.classList.remove("scaleX");

      clearTimeout(t);
    }, idx * 500 + 50);
  });
  engagementCurationMobileBars.forEach((info, idx) => {
    const t = setTimeout(() => {
      info.classList.remove("scaleX");

      clearTimeout(t);
    }, idx * 500 + 50);
  });
  engagementCurationDetails.forEach((info, idx) => {
    const t = setTimeout(() => {
      info.classList.remove("moveUp");

      clearTimeout(t);
    }, idx * 500 + 50);
  });
  twoValRowsEngagementCuration.forEach((info, idx) => {
    const t = setTimeout(() => {
      info.classList.remove("moveUp");

      clearTimeout(t);
    }, idx * 500 + 50);
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item) => {
    item.classList.add("moveToRight");
  });
  engagementCurationBars.forEach((item) => {
    item.classList.add("scaleX");
  });
  engagementCurationMobileBars.forEach((item) => {
    item.classList.add("scaleX");
  });
  engagementCurationDetails.forEach((item) => {
    item.classList.add("moveUp");
  });
  twoValRowsEngagementCuration.forEach((item) => {
    item.classList.add("moveUp");
  });
}
