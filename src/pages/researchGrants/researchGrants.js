import "../../common/ui/twoValuesRow/twoValuesRow.css";

import { displayPopup, hidePopup } from "../index/index";

const toResearchGrants = document.querySelector(".toResearchGrants");
const researchGrantsClose = document.querySelector(".researchGrantsClose");
const researchGrantsPage = document.querySelector(".researchGrantsPage");

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeResearchGrantsPage();
  }
}

function showResearchGrantsPage(e) {
  displayPopup(researchGrantsPage);
  researchGrantsPage.addEventListener('click', onOpacity);
  animationResearchGrants();
}
function closeResearchGrantsPage() {
  reverseAnimation();
  hidePopup(researchGrantsPage);
  researchGrantsPage.removeEventListener('click', onOpacity);
}
toResearchGrants.addEventListener("click", showResearchGrantsPage);
researchGrantsClose.addEventListener("click", closeResearchGrantsPage);

//animation elements

const sidebarIcons = document.querySelectorAll(
  ".researchGrantsPage .sidebar-horizontal-item"
);
const institutionItemsChart = document.querySelectorAll(
  ".research-grants-chart-item .bar-fill"
);
const hiveIcons = document.querySelectorAll(
  ".research-grants-icon-hive"
);

function animationResearchGrants() {
  institutionItemsChart.forEach((item, idx) => {
    const t = setTimeout(() => {
      const width = item.dataset.width;
      item.style.width = width;
    }, idx * 100 + 50);
  });
  Array.from(sidebarIcons).reverse().forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveToRight");
      clearTimeout(t);
    }, idx * 100 + 50);
  });
  hiveIcons.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("toTop");
      clearTimeout(t);

    }, idx * 100 + 500);
  });
  // bineficVluesElements.forEach((el, idx) => {
  //   animatedCounter({elem: el, numFrom: 0, numTo: bineficValuesList[idx], step: 3, interval: 100});
  // });
}

function reverseAnimation() {
  sidebarIcons.forEach((item, idx) => {
    item.classList.add("moveToRight");
  });
  institutionItemsChart.forEach((item, idx) => {
    item.style.width = 0;
  });
  hiveIcons.forEach((item, idx) => {
    item.classList.add("toTop");
  });
}
