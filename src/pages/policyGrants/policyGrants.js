import { displayPopup, hidePopup } from "../index/index.js";

const toPolicyGrant = document.querySelector(".toPolicyGrant");
const policyGrantPage = document.querySelector(".policyGrantPage");
const policyGrantClose = document.querySelector(".policyGrantClose");

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closePolicyResearchPage();
  }
}

function showPolicyResearchPage(e) {
  displayPopup(policyGrantPage);
  animationMathGrant();
  policyGrantPage.addEventListener("click", onOpacity);
}
function closePolicyResearchPage() {
  reverseAnimation();
  hidePopup(policyGrantPage);
  policyGrantPage.removeEventListener("click", onOpacity);
}
toPolicyGrant.addEventListener("click", showPolicyResearchPage);
policyGrantClose.addEventListener("click", closePolicyResearchPage);

//animation elements

const sidebarIcons = policyGrantPage.querySelectorAll(".policy-grant-icon");
const domainItems = document.querySelectorAll(".policyGrantPage .domain-item");


function animationMathGrant() {
  Array.from(sidebarIcons)
    .reverse()
    .forEach((item, idx) => {
      const t = setTimeout(() => {
        item.classList.remove("moveToRight");
        clearTimeout(t);
      }, idx * 100 + 50);
    });
    domainItems.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveUp");
      clearTimeout(t);
    }, idx * 100);
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item, idx) => {
    item.classList.add("moveToRight");
  });
  domainItems.forEach((item, idx) => {
    item.classList.add("moveUp");
  });
}
