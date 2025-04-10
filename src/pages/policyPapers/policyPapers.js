import { displayPopup, hidePopup } from "../index/index.js";

const toPolicyPapers = document.querySelector(".toPolicyPapers");
const policyPapersPage = document.querySelector(".policyPapersPage");
const policyPapersClose = document.querySelector(".policyPapersClose");

console.log(policyPapersClose)

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closePolicyPapersPage();
  }
}

function showPolicyResearchPage(e) {
  displayPopup(policyPapersPage);
  animationMathPapers();
  policyPapersPage.addEventListener("click", onOpacity);
}
function closePolicyPapersPage() {
  reverseAnimation();
  hidePopup(policyPapersPage);
  policyPapersPage.removeEventListener("click", onOpacity);
}
toPolicyPapers.addEventListener("click", showPolicyResearchPage);
policyPapersClose.addEventListener("click", closePolicyPapersPage);

//animation elements

const sidebarIcons = policyPapersPage.querySelectorAll(".policy-Papers-icon");
const domainItems = document.querySelectorAll(".policyPapersPage .domain-item");


function animationMathPapers() {
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
