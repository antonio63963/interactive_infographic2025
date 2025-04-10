import { displayPopup, hidePopup } from "../index/index.js";

const toPrizeWinners = document.querySelector(".toPrizeWinners");
const prizesWinnersPage = document.querySelector(".prizesWinnersPage");
const prizesWinnersClose = document.querySelector(".prizesWinnersClose");

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closePrizeWinnersPage();
  }
}

function showPrizeWinnersPage(e) {
  displayPopup(prizesWinnersPage);
  prizesWinnersPage.addEventListener("click", onOpacity);
}
function closePrizeWinnersPage() {
  hidePopup(prizesWinnersPage);
  prizesWinnersPage.removeEventListener("click", onOpacity);
}

toPrizeWinners.addEventListener("click", showPrizeWinnersPage);
prizesWinnersClose.addEventListener("click", closePrizeWinnersPage);
