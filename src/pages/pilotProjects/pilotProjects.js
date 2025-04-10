import { displayPopup, hidePopup } from "../index/index.js";
import { initCardChart } from '../../common/ui/card/card.js';


const toPilotProjects = document.querySelector(".toPilotProjects");
const pilotProjectsPage = document.querySelector(".pilotProjectsPage");
const pilotProjectsClose = document.querySelector(".pilotProjectsClose");

const pilotProjectsCharts = [
  {
    title: "electric",
    canvas: document.querySelector('#pilot-project-1'),
    values: [10, 90],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "green",
    canvas: document.querySelector('#pilot-project-2'),
    values: [50, 50],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
  {
    title: "bio",
    canvas: document.querySelector('#pilot-project-3'),
    values: [80, 20],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "kfas",
    canvas: document.querySelector('#pilot-project-4'),
    values: [80, 20],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "university",
    canvas: document.querySelector('#pilot-project-5'),
    values: [80, 20],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "solar",
    canvas: document.querySelector('#pilot-project-6'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "co",
    canvas: document.querySelector('#pilot-project-7'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "service",
    canvas: document.querySelector('#pilot-project-8'),
    values: [100, 0],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  
];

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closePilotProjectsPage();
  }
}

const allCharts = [];

function initPilotProjectsCharts() {
  const t = setTimeout(() => {
    pilotProjectsCharts.forEach((b) =>
      allCharts.push(initCardChart(b.canvas, b.values, b.valuesColors))
    );
    clearTimeout(t);
  }, 500);
}

function showPilotProjectsPage(e) {
  displayPopup(pilotProjectsPage);
  initPilotProjectsCharts();
  pilotProjectsPage.addEventListener("click", onOpacity);
}
function closePilotProjectsPage() {
  hidePopup(pilotProjectsPage);
  allCharts.forEach((b) => b.destroy());
  pilotProjectsPage.removeEventListener("click", onOpacity);
}
toPilotProjects.addEventListener("click", showPilotProjectsPage);
pilotProjectsClose.addEventListener("click", closePilotProjectsPage);
