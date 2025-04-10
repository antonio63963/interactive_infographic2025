import { displayPopup, hidePopup } from "../index/index.js";

const toFinancialAchivements = document.querySelector(".toFinancialAchivements");
const financialAchivementsPage = document.querySelector(".financialAchivementsPage");
const financialAchivementsClose = document.querySelector(".financialAchivementsClose");

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeFinancialAchivementsPage();
  }
}

function showFinancialAchivementsPage(e) {
  console.log("WOWO")
  displayPopup(financialAchivementsPage);
  financialAchivementsPage.addEventListener("click", onOpacity);
}
function closeFinancialAchivementsPage() {
  hidePopup(financialAchivementsPage);
  financialAchivementsPage.removeEventListener("click", onOpacity);
}
toFinancialAchivements.addEventListener("click", showFinancialAchivementsPage);
financialAchivementsClose.addEventListener("click", closeFinancialAchivementsPage);
