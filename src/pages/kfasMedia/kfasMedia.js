import { displayPopup, hidePopup } from "../index/index.js";
import { initSocialChart } from "../../common/ui/socialChart/socialChart.js";

const toKfasMedia = document.querySelector(".toKfasMedia");
const kfasMediaPage = document.querySelector(".kfasMediaPage");
const kfasMediaClose = document.querySelector(".kfasMediaClose");

const socialsChartData = {
  'kfas-insta': {
    values: [63280, 63281, 63459, 63637, 65386, 69702, 70571, 77115, 79055, 79689, 80285, 80547],
    range: {
      min: 60000,
      max: 90000
    },
    step: 5000,
  },
  'kfas-twitter': {
    values: [22097, 22212, 22239, 22212, 22335, 22427, 22427, 22553, 22598, 22694, 22712, 22743],
    range: {
      min: 21500,
      max: 23000,
    },
    step: 500,
  },
  'kfas-fb': {
    values: [24019, 25510, 25602, 25699, 25954, 26064, 26085, 26092, 26126, 26117, 26115, 26119],
    range: {
      min: 23000,
      max: 27000,
    },
    step: 1000,
  },
  'kfas-in': {
    values: [24459, 24459, 25683, 25683, 26566, 26944, 27380, 27543, 28001, 28459, 27789, 28002],
    range: {
      min: 24000,
      max: 29000,
    },
    step: 1000,
  },
  'kfas-youtube': {
    values: [2156, 2156, 2167, 2167, 2170, 2183, 2194, 2222, 2233, 2242, 2246, 2252],
    range: {
      min: 2100,
      max: 2300,
    },
    step: 50,
  },
}

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeMathGrantPage();
  }
}

function showKfasMediaPage(e) {
  displayPopup(kfasMediaPage);
  initTabs();
  kfasMediaPage.addEventListener("click", onOpacity);
}
function closeMathGrantPage() {
  hidePopup(kfasMediaPage);
  closeTabs();
  kfasMediaPage.removeEventListener("click", onOpacity);
}
toKfasMedia.addEventListener("click", showKfasMediaPage);
kfasMediaClose.addEventListener("click", closeMathGrantPage);

//animation elements

const tabs = document.querySelectorAll(".kfasMediaPage .app-tab");
const canvas = document.querySelector("#socials-chart").getContext("2d");
let socialsChart;

function activateTab(selectedTab) {
  const activeColor = selectedTab.dataset.color;
  selectedTab.style.backgroundColor = activeColor;
  selectedTab.classList.add("active");
}
function desactivateTab(unselectedTab) {
  if (unselectedTab.classList.contains("active")) {
     unselectedTab.style.removeProperty('background-color');
    unselectedTab.classList.remove("active");
  } else {
    return;
  }
}

function onTab(e) {
  const tab = e.target.closest(".app-tab");
  const tabId = tab.attributes.id.value;
  tabs.forEach((t) => (t.id == tabId ? activateTab(t) : desactivateTab(t)));

  socialsChart.destroy();
  socialsChart = initSocialChart(canvas, socialsChartData[tabId])
}

function initTabs() {
  const activeTab = Array.from(tabs).find(t => t.classList.contains('active'));

  activateTab(activeTab);
  tabs.forEach((t) => t.addEventListener("click", onTab));
  const t = setTimeout(() => {
    socialsChart = initSocialChart(canvas, socialsChartData[activeTab.attributes.id.value]);
    clearTimeout(t);
  }, 500);
}


function closeTabs() {
  tabs.forEach((t) => t.removeEventListener("click", onTab));
  socialsChart.destroy();
}
