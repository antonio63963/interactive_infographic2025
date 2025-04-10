import { displayPopup, hidePopup } from "../index/index.js";
import { initCardChart } from "../../common/ui/card/card.js";

const toPrivateSectorProjects = document.querySelector(
  ".toPrivateSectorProjects"
);
const privateSectorProjectsPage = document.querySelector(
  ".privateSectorProjectsPage"
);
const privateSectorProjectsClose = document.querySelector(
  ".privateSectorProjectsClose"
);

const privateSectorProjectsCharts = [
  {
    title: "dev",
    canvas: document.querySelector("#privateSector-project-1"),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "organic",
    canvas: document.querySelector("#privateSector-project-2"),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
];

const allCharts = [];

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closePrivateSectorProjectsPage();
  }
}

function initPrivateSectorProjectsCharts() {
  const t = setTimeout(() => {
    privateSectorProjectsCharts.forEach((b) =>
      allCharts.push(initCardChart(b.canvas, b.values, b.valuesColors))
    );
    clearTimeout(t);
  }, 500);
}

function showPrivateSectorProjectsPage(e) {
  displayPopup(privateSectorProjectsPage);
  initPrivateSectorProjectsCharts();
  privateSectorProjectsPage.addEventListener("click", onOpacity);
}
function closePrivateSectorProjectsPage() {
  hidePopup(privateSectorProjectsPage);
  allCharts.forEach((b) => b.destroy());
  privateSectorProjectsPage.removeEventListener("click", onOpacity);
}
toPrivateSectorProjects.addEventListener(
  "click",
  showPrivateSectorProjectsPage
);
privateSectorProjectsClose.addEventListener(
  "click",
  closePrivateSectorProjectsPage
);
