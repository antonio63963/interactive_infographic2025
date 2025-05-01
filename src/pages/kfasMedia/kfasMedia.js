import { displayPopup, hidePopup } from "../index/index.js";
import { initSocialChart } from "../../common/ui/socialChart/socialChart.js";

const toKfasMedia = document.querySelector(".toKfasMedia");
const kfasMediaPage = document.querySelector(".kfasMediaPage");
const kfasMediaClose = document.querySelector(".kfasMediaClose");

const socialsChartData = {
  'kfas-insta': {
    values: [81244, 81858, 82245, 82632, 83371, 83728, 84879, 86859, 89101, 91515, 92851, 93339],
    range: {
      min: 80000,
      max: 94000
    },
    step: 2000,
  },
  'kfas-twitter': {
    values: [22163, 22295, 22480, 22605, 22729, 22879, 23007, 23137, 23255, 23247, 23233, 23279],
    range: {
      min: 22000,
      max: 23400,
    },
    step: 200,
  },
  'kfas-fb': {
    values: [25593, 25674, 25737, 25774, 25814, 25951, 25990, 26029, 26067, 26091, 26110, 26155],
    range: {
      min: 25500,
      max: 26200,
    },
    step: 100,
  },
  'kfas-in': {
    values: [29715, 30063, 30485, 31276, 31886, 32270, 32492, 32648, 33566, 33815, 34377, 34946],
    range: {
      min: 29000,
      max: 35000,
    },
    step: 1000,
  },
  'kfas-youtube': {
    values: [2262, 2267, 2291, 2306, 2310, 2317, 2318, 2325, 2325, 2350, 2380, 2390],
    range: {
      min: 2250,
      max: 2390,
    },
    step: 20,
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
